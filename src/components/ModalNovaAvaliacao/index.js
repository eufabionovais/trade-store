import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import "./modal-custom.scss"

import FormAvaliacao from "../FormAvaliacao"

function ModalNovaAvaliacao() {
  const [show, setShow] = useState(false);

  const handleClose = () => {

    setShow(false);
  } 
  const handleShow = (event) => {
    event.preventDefault();
    setShow(true);    
    } 

  return (
    <>


      <button className='btn-outline'  onClick={handleShow}>Fazer avaliação</button>

      <Modal dialogClassName="headered-modal"  size="xl" show={show} onHide={handleClose} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Como você avalia esta produto?</Modal.Title>
        </Modal.Header>
        <Modal.Body>


           <FormAvaliacao />

        </Modal.Body>

      </Modal>
    
    </>
  );
}

export default ModalNovaAvaliacao;
