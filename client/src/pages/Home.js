import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import {UserContext} from "../provider/UserProvider";
import axios from 'axios'


export default function Home (){
    // const user = useContext(UserContext);
    axios.get("https://www.google.com");
    return (
        <div>
            Home
            <Link to= '/signin'>Signin</Link>
            <Link to= '/signup'>SignUp</Link>
        </div>
    )
}
