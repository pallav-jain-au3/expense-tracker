import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import {UserContext} from "../provider/UserProvider";
import axios from 'axios'
import Transaction from '../components/Transaction';


export default function Home (){
    const user = useContext(UserContext);
    return (
        <div>
            Home
            {user ? (<Transaction/>):(
                    <div>
                        <Link to= '/signin'>Signin</Link>
                        <Link to= '/signup'>SignUp</Link>

                    </div>
                )}

        </div>
    )
}
