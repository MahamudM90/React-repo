import {  createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import auth from "../firebase/config";
export const AuthContext = createContext(null);

export default function AuthProvider ({children}){

    const [user,setUser] = useState(null)
    const [loading, SetLoading] = useState(true)

  const createUser = (email,password)=>{
    SetLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const signIn = (email,password) =>{
    SetLoading(true)
    return signInWithEmailAndPassword(auth, email, password)

  }

  const logOut = () => {
    SetLoading(true)
    return signOut(auth);
  }

  useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser)
      SetLoading(false)
    })
    return()=>{
      unSubscribe();
    }
  },[])
    const contactInfo = {user,createUser,signIn,logOut,loading}
    
    return(
        <>
        <AuthContext.Provider value={contactInfo}>
            {children}
        </AuthContext.Provider>
        </>
    )
}