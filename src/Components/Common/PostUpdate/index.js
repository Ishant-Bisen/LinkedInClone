import React, { useState ,useMemo } from "react";
import "./index.scss";
import ModalComponent from "../Modal";
import  {postStatus , getPosts} from "../../../api/FireStoreAPI";
import PostCard from "../PostCard";
import {GetCurrentTime} from "../../Helperfunctions/GetCurrentTime"

export default function PostUpdate(){
  const [openModal, setopenModal] = useState(false)
  const [Status, setStatus] = useState("");
  const [getAllStatus, setgetAllStatus] = useState([])
  const SendStatus = async()=>{
    let object = {
      status : Status,
      timeStamp : GetCurrentTime('LLL'),
      userEmail : localStorage.getItem("userEmail")
    }
     await postStatus(object);
     await setStatus("");
  
  }
  useMemo(() => 
    getPosts(setgetAllStatus),
  
[])
  

  return (
    <div>
      <div className="postUpdate-main">
        <div className="postStatus">
          <button className="open-post-modal" onClick={() => {setopenModal(true)}}>
             Start a post..
          </button>
        </div>
     
      <ModalComponent 
      modalOpen = {openModal}
       setModalOpen ={setopenModal} 
       setStatus={setStatus}
       Status = {Status}
       SendStatus={SendStatus}/>

      <div>

        {getAllStatus.map((post) => {
          return(
          <>
            <PostCard post ={post}/>
          </>
          )})
        }
      </div>
      </div>
    </div>
  

  
  )
}
