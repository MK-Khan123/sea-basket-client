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
// import sweetAlert from '../components/Shared/SweetAlert/SweetAlert';

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();

    //Navigate towards the actual page after successful authentication(login)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || '/home';

    const registerUsingEmail = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                navigate(from, { replace: true });
                // sweetAlert('Successfully Registered!', 'success', 'Please login using your email and password');
            })
            .catch((error) => {
                const errorMessage = error.message;
                // sweetAlert('Registration Failed!', 'error', errorMessage);
            });
    }

    const signInUsingEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                navigate(from, { replace: true });
                // sweetAlert('Successfully Logged In!', 'success');
            })
            .catch((error) => {
                const errorMessage = error.message;
                // sweetAlert('Login Failed', 'error', errorMessage);
                setError(errorMessage);
            });
    }

    const logout = () => {
        signOut(auth).then(() => {
            setUser({});
            // sweetAlert('Logged out successfully!', 'success');
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
        error,
        logout,
        registerUsingEmail,
        signInUsingEmail
    };
};

export default useFirebase;