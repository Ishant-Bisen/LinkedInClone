
import LoginComponent from '../Components/LoginComponent'
import {auth} from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect ,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../Components/Common/Loader/Spinner';

export default function Login() {
  const [loading, setloading] = useState(true)
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth , (res)=>{
      if(res.accessToken){
        navigate('/')
      }else{
          setloading(false)
      }
      })
  
  }, [])
  
  return (
    <div>
      {loading ? <Spinner/> : <LoginComponent/>}

    </div>
   
  );
}
