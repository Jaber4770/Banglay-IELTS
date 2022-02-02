import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged  } from "firebase/auth";
import initializeAuthentication from '../component/Firebase/Firebase.init';
initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const  SignInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=> {
        onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
        })
    }, [])

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