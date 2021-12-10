import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/Config";
import { doc, setDoc, Timestamp} from 'firebase/firestore';
import { useHistory } from 'react-router-dom';

export const Register = () => {
    const [data, setData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        error: '',
        loading: false,
    });
    const history = useHistory();
    const { fname, lname, email, password, error, loading } = data;

    const handleChange = e => {
        setData({...data, [e.target.name]: e.target.value })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setData({ ...data, error: null, loading: true});
        if( !fname || !lname|| !email || !password){
            setData({ ...data, error: "All fields are required"})
        }
        try {
            const result = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            await setDoc(doc(db, 'users', result.user.uid),{
                uid: result.user.uid,
                fname,
                lname,
                email,
                createdAt: Timestamp.fromDate(new Date()),
                isOnline: true,
            });
            setData({
                fname:"",
                lname:"",
                email:"",
                password:"",
                error: null,
                loading:false,

            });
            history.replace("/");
        } catch (err) {
            setData({...data, error: err.message, loading: false});
        }
    };
    return (
        <section>
            <h3>Create An Account</h3>
            <form className="form" onSubmit={handleSubmit}>
                <div className="input_container">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" name="fname" value={fname} onChange={handleChange} />
                </div>
                <div className="input_container">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" name="lname" value={lname} onChange={handleChange}/>
                </div>
                <div className="input_container">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} onChange={handleChange} />
                </div>
                <div className="input_container">
                    <label htmlFor="assword">Password</label>
                    <input type="password" name="password" value={password} onChange={handleChange} />
                </div>
               <p className='error'>{error}</p>
                <div className="btn_container">
                    <button className="btn" disabled={loading}>
                        {loading ? 'Creating ...' : 'Register'}
                    </button>
                </div>
            </form>
        </section>
    );
};
export default Register;