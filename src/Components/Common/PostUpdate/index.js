import React, { useState } from "react";
import "./index.scss";
import ModalComponent from "../Modal";
import  {postStatus} from "../../../api/FireStoreAPI";

export default function PostUpdate(){
  const [openModal, setopenModal] = useState(false)
  const [Status, setStatus] = useState("");
  const SendStatus = ()=>{
    postStatus(Status);
  }
  return (
    <div>
      <div className="postUpdate-main">
        <div className="postStatus">
          <button className="open-post-modal" onClick={() => {setopenModal(true)}}>
             Start a post..
          </button>
        </div>
      </div>
      <ModalComponent 
      modalOpen = {openModal}
       setModalOpen ={setopenModal} 
       setStatus={setStatus}
       Status = {Status}
       SendStatus={SendStatus}/>
    </div>
  );
}
