import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCOilRsATxefKZKB84AZjayOgDD_tMeyYA",
    authDomain: "expense-tracker-d6b18.firebaseapp.com",
    databaseURL: "https://expense-tracker-d6b18.firebaseio.com",
    projectId: "expense-tracker-d6b18",
    storageBucket: "expense-tracker-d6b18.appspot.com",
    messagingSenderId: "596475458814",
    appId: "1:596475458814:web:34d8a04a9c547b9919a1af",
    measurementId: "G-N6BFVQX2DH"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () =>{
    auth.signInWithPopup(provider)
}

/*export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const { email, displayName } = user;
        try {
            await userRef.set({
                displayName,
                email
            });
        } catch (error) {
            console.error("Error creating user document", error);
        }
    }
    return getUserDocument(user.uid);
};
const getUserDocument = async uid => {
    if (!uid) return null;
    try {
        const userDocument = await firestore.doc(`users/${uid}`).get();
        return {
            uid,
            ...userDocument.data()
        };
    } catch (error) {
        console.error("Error fetching user", error);
    }
};

*/
