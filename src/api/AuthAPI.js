import {signInWithEmailAndPassword ,
   createUserWithEmailAndPassword ,
   GoogleAuthProvider ,
   signInWithPopup} from 'firebase/auth' 
import {auth} from "../firebaseConfig"
import { toast } from 'react-toastify'
   
   const LoginAPI = async(email ,password) => {
     try{
       let res = await signInWithEmailAndPassword(auth ,email ,password) 
       return res
     }catch(err){
        console.log(err)
        toast.error(err.message)
     }
     
    }
   const RegisterAPI = async(email ,password) => {
      try{
        let res = await createUserWithEmailAndPassword(auth ,email ,password) 
        toast.success("successfully! Registered and Logged In");
        return res
      }catch(err){
         console.log(err)
         toast.error(err.message)
      }
      
     }
     const GoogleSignInAPI = async() => {
      try{
        let googleProvider = new GoogleAuthProvider();
        let res = await signInWithPopup(auth ,googleProvider ) 
        return res
      }catch(err){
         console.log(err)
         toast.error(err.message)
      }
      
     }
     export{RegisterAPI , LoginAPI , GoogleSignInAPI} ;