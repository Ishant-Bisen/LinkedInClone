import {  Button, Modal } from 'antd';
import React from 'react';
import './index.scss'
import { useState } from 'react';
const ModalComponent= ({modalOpen ,setModalOpen ,setStatus ,Status , SendStatus}) => {
const [value, setvalue] = useState(true)

  return (
    <>
      <Modal 
        title="Create a post"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer = {
          <Button key = "sumbit" type = 'primary' disabled = {value} onClick ={() => {
            setModalOpen(false)
            SendStatus(Status);
          }}   >
            Post
          </Button>
        }
        className='modal-main'
      >
        <input className='user-input' type="text" placeholder='what you want to talk about.' onChange={(event) => {
          (event.target.value.length > 0)?setvalue(false) : setvalue(true);

          setStatus(event.target.value);
          
          }} />
      </Modal>
    </>
  );
};
export default ModalComponent;