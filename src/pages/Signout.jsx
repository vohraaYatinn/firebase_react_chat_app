import React,{useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../utils/firebase_config";
import {signOut } from "firebase/auth";
const Signout = () => {
  const navigate = useNavigate()
    const signout = () =>{
        signOut(firebaseAuth).then(() => {
          console.log("signOut")
          navigate('/login')
        }).catch((error) => {
            console.log("error: " + error)
          // An error happened.
        });
        }
        useEffect(()=>{
            signout()
        },[])
  return (
    <div>Signout</div>
  )
}

export default Signout