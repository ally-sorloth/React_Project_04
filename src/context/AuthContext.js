import { createContext, useEffect, useState } from 'react';
import firebase from "../firebase/firebase.utils";

const FirebaseAuthContext = createContext();

function AuthContextProvider(props) {
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        firebase.firebaseAuth.onAuthStateChanged((user) => {
            console.log("user", user);
            setCurrentUser(user);
        });
    }, []);
    return(
        <FirebaseAuthContext.Provider value={{currentUser}}>
            {props.children}
        </FirebaseAuthContext.Provider>
    );
}

export default AuthContextProvider;