import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebase/firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    const userInfo = {
        user,
        loading,
        createUser,
        loginUser
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;