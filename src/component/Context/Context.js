import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.init';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ThreeCircles } from 'react-loader-spinner';
export const AuthContex = createContext()
const auth = getAuth(app)

const Context = ({ children }) => {
    // const navigate = useNavigate()
    const [databaseLoader, setDatabaseLoader] = useState(false)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const [userDatabase, setUserDatabase] = useState({})

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

    const loginInEmailPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        localStorage.removeItem('token')
        setUserDatabase('')
        return signOut(auth)
    }

    const updateInfo = (name) => {
        setLoading(true)
        console.log(name)
        return updateProfile(auth.currentUser, {
            displayName: name,

        })
    }
    

    
      // ----------------get user from database------------

      const userDataFromDb = async (email) => {
        try {
            setDatabaseLoader(true)
            const res = await axios.get(`https://assernment-12-serverside.vercel.app/users/admin?email=${email}`,{
                headers: {
                    authorization: localStorage.getItem('token')
                },
            })

            console.log(res.data.data)
            setUserDatabase(res.data.data)
            setDatabaseLoader(false)
        } catch (error) {
            console.log(error)
            setDatabaseLoader(false)
        }
    }

    useEffect(() => {
        if (user?.uid) {
            userDataFromDb(user?.email)
        }
    }, [user?.email, user?.uid])


    // console.log(userDatabase);

    




    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setUser(currentUser)
        })
        return () => {
            unsuscribe()
        }
    }, [])

    if (databaseLoader) {
        return <div className='flex justify-center items-center min-h-screen'>
            <ThreeCircles
                height="100"
                width="100"
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperclass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
            />
        </div>
    }

console.log(user)
    const authInfo = { logOut, loginInEmailPassword, singUpEmainPassword, googleLogin, loading, setLoading, user, updateInfo, userDatabase ,databaseLoader,setUserDatabase}
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default Context;