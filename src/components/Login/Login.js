import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser);
                history.replace(from);
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    return (
        <div className='login-area'>
            <div className='container signInArea pt-5'>
                {
                    loggedInUser.email ?
                        <div>
                            <button onClick={() => setLoggedInUser({})} className="form-control btn btn-info w-50 mb-3" >Sign Out</button>
                            <img src='https://cdn.dribbble.com/users/2444366/screenshots/5745666/salla_dribbl.gif' className="pr-3 w-75" alt="" />
                        </div>
                        : <div>
                            <button onClick={handleGoogleSignIn} className="form-control btn btn-info w-50 mb-3">Login With Google</button>
                            <img src='https://cdn.dribbble.com/users/2444366/screenshots/5745666/salla_dribbl.gif' className="pr-3 w-75" alt="" />
                        </div>
                }

            </div>
        </div>
    );
};

export default Login;