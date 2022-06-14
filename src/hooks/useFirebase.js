import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import initializeAuthentication from "../Firebase/firebase.initialize";
import sweetAlert from '../components/Shared/SweetAlert/SweetAlert';

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});

    const auth = getAuth();

    //Navigate towards the actual page after successful authentication(login)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || '/home';

    //Used this function to register admin@seabasket.com for the first time
    const registerUsingEmail = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                navigate(from, { replace: true });
                sweetAlert('Successfully Registered!', 'success', 'Please login using your email and password');
            })
            .catch((error) => {
                const errorMessage = error.message;
                sweetAlert('Registration Failed!', 'error', errorMessage);
            });
    }

    const signIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                navigate(from, { replace: true });
                sweetAlert('Successfully Logged In!', 'success');
            })
            .catch((error) => {
                const errorMessage = error.message;
                sweetAlert('Login Failed', 'error', errorMessage);
            });
    }

    const logout = () => {
        signOut(auth).then(() => {
            setUser({});
            sweetAlert('Logged out successfully!', 'success');
        }).catch((error) => {
            alert(error);
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User                
                console.log('onAuthStateChanged', user);
                setUser(user);
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    }, [auth]);

    return {
        user,
        logout,
        registerUsingEmail,
        signIn
    };
};

export default useFirebase;