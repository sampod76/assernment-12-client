import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.init';
import { useNavigate } from 'react-router-dom';
export const AuthContex = createContext()
const auth = getAuth(app)

const Context = ({ children }) => {
    // const navigate = useNavigate()
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    };

    const singUpEmainPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

 
    const updateInfo =(name,image)=>{
        setLoading(true)
        return updateProfile(auth.currentUser ,{
            displayName:name,
            photoURL:image
        })
    }

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setUser(currentUser)
        })
        return () => {
            unsuscribe()
        }
    }, [])


    const authInfo = { logOut, loginInEmailPassword, singUpEmainPassword, googleLogin, loading, setLoading, user ,updateInfo}
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default Context;