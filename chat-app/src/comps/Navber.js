import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { auth, db } from '../firebase/Config';
import { signOut } from '@firebase/auth';
import { updateDoc, doc, } from '@firebase/firestore';
import { AuthContext } from '../context/auth';
import { useHistory } from "react-router-dom";

export const Navber = () => {
    const history = useHistory();
    const { user } = useContext(AuthContext);
    const handleSignout = async () => {
        await updateDoc(doc(db, "users", auth.currentUser.uid), {
            isOnline: false,
        })
        await signOut(auth);
        history.replace("/login");
    };
    return (
        <div>
            <nav>
                <h3>
                    <Link to="/">Messenger</Link>
                </h3>
                <div className="header"> 
                    {user ? (
                <>
                    <Link to="/profile">Profile</Link>
                    <button className="btn" onClick={handleSignout}>Logout</button>
                </>
                 ) : (
                <>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </>  
               )}
                    
                </div>
            </nav>
        </div>
    )
}

export default Navber;
