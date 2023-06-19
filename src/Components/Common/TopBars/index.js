import React from 'react'
import './index.scss'
import { useNavigate } from 'react-router-dom'
import linkedInLogo from '../../../assesst/linkedInLogo.png'
import user from '../../../assesst/user.png'
import { AiOutlineHome ,AiOutlineUsergroupAdd ,AiOutlineSearch ,AiOutlineBell} from 'react-icons/ai';
import {BsBriefcaseFill ,BsMessenger} from 'react-icons/bs'

export default function Topbar() {
let navigate = useNavigate();
const router = ((route) => {
            navigate(route);
})
  return (
    <div>
      <div className='topbar-main'>
        
             <img className='linkedin-logo' src= {linkedInLogo} alt="logo" />
             
             <div className='icons'>
                <AiOutlineSearch size = {23} className='react-icon'/>
                <AiOutlineHome size={25} className='react-icon' onClick={() => router('/')} />
                <AiOutlineUsergroupAdd size={25} className='react-icon' onClick={() => router('/friend')}/> 
                <BsBriefcaseFill size ={25} className='react-icon' onClick={() => router('/')}/>
                <AiOutlineBell size ={25} className='react-icon'onClick={() => router('/notification')}/>
                <BsMessenger size ={25} className='react-icon' onClick={() => router('/message')}/>
             </div>
               
                <img className = "user"  src = {user} alt="user-logo" />
      </div>
    </div>
  )
}
