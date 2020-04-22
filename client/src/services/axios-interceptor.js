import {auth} from '../firebase';
import axios from 'axios'

let user = null;

auth.onAuthStateChanged(userAuth => {
    console.log("setting up user");
    user = userAuth;
});

axios.interceptors.request.use(async (config) => {
    config.headers["intercepted"] = "yes"
    console.log("user", user)
    if(auth.currentUser == null) {
        return Promise.resolve(config);
    }
    return user.getIdToken()
        .then(accessToken => {
            let serverCallUrl = new URL(config.url);
            if (serverCallUrl.pathname.includes('/auth')) return config;
                config.headers['authorization'] = `Bearer ${accessToken}`;
                return config
        })
        .catch(err => console.error(err))
});
