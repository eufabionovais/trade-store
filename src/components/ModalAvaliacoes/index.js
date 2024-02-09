import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AvaliacaoItem from "../AvaliacaoItem"
import "./modal-custom.scss"

function ModalAvaliacoes() {
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
        <a href="#" onClick={handleShow} className='card-link'>Ver todos os comentários</a>
    
    

      <Modal dialogClassName="headered-modal"  size="xl" show={show} onHide={handleClose} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Avaliações</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AvaliacaoItem />
            <AvaliacaoItem />
            <AvaliacaoItem />
            <AvaliacaoItem />

        </Modal.Body>

      </Modal>
    
    </>
  );
}

export default ModalAvaliacoes;
