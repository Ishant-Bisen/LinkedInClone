import React from 'react'
import { RegisterAPI } from '../api/AuthAPI';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import linkedInLogo from "../assesst/linkedInLogo.png";
import "../Sass/LoginComponent.scss" ;

export default function RegisterComponent() {
    const [credentials, setcredentials] = useState({}) ;
    const register = async(email ,password) =>{
    

            let response = await RegisterAPI(credentials.email ,credentials.password)
            console.log(response);    
    }
    const navigate = useNavigate();
    return (
        <div className='main'>
          <div className='logo'>
          <h2 className='logo-heading'>Linked<><img src={linkedInLogo} alt="logo"  className='linkedInLogo'/></></h2>
       
          </div>
          <div className='login-wrapper'>
            
            
            <h1 className='heading'>Create an account</h1>
            <p className='sub-heading'>Stay updated on your professional world </p>
          </div>
          <div className='inputbox'>

              <div className='auth-inputs'>
                <p className='Input-label'>Email or Phone </p>
                <input 
                className='user-input' 
                placeholder='Email or Phone' 
                onChange={(event)=>
                  setcredentials({...credentials ,email : event.target.value })
                } 
                type='email'/>
                <p className='Input-label'>password</p>
                <input 
                className='user-input' 
                onChange={(event)=>
                  setcredentials({...credentials ,password : event.target.value })
                }
                type='password'/>
              </div>
             </div>
              <div className='btn-box'>
                <button 
                  className='login-btn'
                  onClick={register}>Sign up to linkedIn
                </button>

              </div>
    
          <hr 
            className='hr-text' 
            data-content='Or'
          />
    
         
            
            
            
          <p className='new-to-linkedin'>Already have account? <span className='join-now' onClick={() => navigate("/login")} >Sign in</span>
          </p>
         
    
    
    
        </div>
    
    
    
      )
}
