import { useState } from 'react';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";

const useFirebase = () => {
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const  SignInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
    }

    const LogOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    
    return {
        user,
        LogOut,
        SignInUsingGoogle
    }
};

export default useFirebase;