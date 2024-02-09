import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import MiniCart from "../MiniCart";
import "./offcanvas-cart.scss";
import StoreMiniCart from "../StoreMiniCart";


function OffCanvasCart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="off-canvas-cart">

      <Offcanvas show={show} onHide={handleClose} placement="end" className="offcanvas-mini-cart">
        <Offcanvas.Header closeButton>
          <h3>Meu carrinho <span className="total-itens">3 itens</span></h3>
          <MiniCart theme="light" />
        </Offcanvas.Header>
        <Offcanvas.Body>

          <StoreMiniCart />
          <StoreMiniCart />
          <StoreMiniCart />
       
        </Offcanvas.Body>
        <div className="offcanvas-footer">
          <div className="total">
            <strong>Total</strong>
            <strong>R$15,52</strong>
          </div>
          <button className="btn-buy btn-buy-block btn-buy-primary">
            Finalizar Compra
          </button>
          <button className="btn-link btn-link-block">
            Continuar comprando
          </button>          
        </div>

      
      </Offcanvas>
      </div>
    </>
  );
}

export default OffCanvasCart;