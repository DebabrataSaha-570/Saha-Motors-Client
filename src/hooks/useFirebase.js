import { useState, useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";



initializeFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const newUser = { email, displayName: name }
                setUser(newUser)
                setError('')
                console.log(user)
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {

                }).catch((error) => {
                    console.log(error)

                });

                history.push('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                setError((errorMessage))
                setUser({})
            })
            .finally(() => setIsLoading(false))
            ;

    }

    const logInUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
                setError('')
                const destination = location?.state?.from || '/'
                history.push(destination)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
                setUser({})
            })
            .finally(() => setIsLoading(false))
            ;


    }

    const signInWithGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
                setError('')
                console.log(user)
                const destination = location?.state?.from || '/'
                history.push(destination)
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                setUser({})
                console.log(errorMessage)
            })
            .finally(() => setIsLoading(false))
            ;
    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
            setError('')
        }).catch((error) => {
            setError(error)
            setUser({})
        })
            .finally(() => setIsLoading(false))
            ;
    }

    //observer use state

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [])

    return {
        signInWithGoogle,
        user,
        error,
        logOut,
        registerUser,
        logInUser,
        isLoading

    }
}

export default useFirebase; 