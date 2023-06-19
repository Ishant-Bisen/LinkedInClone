import React, { useState } from 'react'
import { LoginAPI ,GoogleSignInAPI  } from '../api/AuthAPI';
import "../Sass/LoginComponent.scss" ;
import linkedInLogo from '../assesst/linkedInLogo.png'
import GoogleButton from 'react-google-button'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const [credentials, setcredentials] = useState({}) ;
    const navigate = useNavigate()
    const login = async() =>{

        let response = await LoginAPI(credentials.email ,credentials.password) ;
        if(response){
          toast.success("Successfully! Logged In");
        }
        console.log(response );
      
    
    } ;
    const googleLogin = async() =>{
          let response = await GoogleSignInAPI();
          toast.success("successfully! Logged In");
          console.log(response);
    }
    
  return (
    <div className='main'>
      <h2 className='logo-heading'>Linked<span><img src={linkedInLogo} alt="logo"  className='linkedInLogo'/></span></h2>
      <div className='login-wrapper'>
      
        
        <h1 className='heading'>Sign In</h1>
        <p className='sub-heading'>Stay updated on your professional world </p>
      </div>
      <div className='inputbox'>

          <div className='auth-inputs'>

            <input 
            className='user-input' 
            placeholder='Email or Phone' 
            onChange={(event)=>
              setcredentials({...credentials ,email : event.target.value })
            } 
            type='email'/>
            <input 
            className='user-input' 
            placeholder='Password' 
            onChange={(event)=>
              setcredentials({...credentials ,password : event.target.value })
            }
            type='password'/>
          </div>
      </div>
      <div className='btn-box'>

        <button 
          className='login-btn' 
          onClick={login}>Login to linkedIn
        </button>
      </div>

      <hr 
        className='hr-text' 
        data-content='Or'
      />
      <div className='google-btn-container'>

        <GoogleButton className='google-btn'
            onClick={googleLogin}>
        </GoogleButton>
      </div>
        
        
        
      <p className='new-to-linkedin'>New to LinkedIn? <span className='join-now' onClick={() => navigate("/register") }>Join now</span>
      </p>
     



    </div>



  )
}
