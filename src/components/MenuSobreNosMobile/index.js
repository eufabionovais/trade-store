import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import MenuSobreNos from "components/MenuSobreNos";
import "./menu-sobre-nos-mobile.scss";

function MainNavMobile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>


      <div className="menu-minha-conta-mobile">

        {/* <Button onClick={handleShow} className='d-lg-none btn-filtrar'>Filtrar <img src={IconFilter} alt="" /></Button> */}

        <button onClick={handleShow} className="button button-sm button-dark-blue">menu</button>


        <Offcanvas show={show} onHide={handleClose} className="offcanvas-minha-conta-mobile">
          <Offcanvas.Header closeButton>
            <KeyboardBackspaceIcon onClick={handleClose} /> menu
          </Offcanvas.Header>
          <Offcanvas.Body>
            <MenuSobreNos />
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default MainNavMobile;