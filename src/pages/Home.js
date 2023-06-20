import React from 'react'
import HomeComponent from '../Components/HomeComponent' ;
import { useEffect , useState} from 'react';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Spinner from '../Components/Common/Loader/Spinner';

export default function Home() {
  const [loader, setloader] = useState(true)
  let navigate = useNavigate();
  
  useEffect(() => {
        onAuthStateChanged(auth ,(res) =>{
            if(!res?.accessToken){
              navigate("/login")
              
            }else{
              
              setloader(false)
            }
        });
  }, [])
  
  return (
    <div>
      {loader ? <Spinner/>: <HomeComponent/>}
      
    </div>
  )
}
