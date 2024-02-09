import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import FilterGroup from "components/FiltersList";
import FilterPreco from "components/FiltroPreco";
import MenuMinhaConta from "components/MenuMinhaConta";
import "./menu-minha-conta-mobile.scss";

function MainNavMobile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>


      <div className="menu-minha-conta-mobile">

        {/* <Button onClick={handleShow} className='d-lg-none btn-filtrar'>Filtrar <img src={IconFilter} alt="" /></Button> */}

        <button onClick={handleShow} className="button button-sm button-dark-blue">Minha conta</button>


        <Offcanvas show={show} onHide={handleClose} className="offcanvas-minha-conta-mobile">
          <Offcanvas.Header closeButton>
            <KeyboardBackspaceIcon onClick={handleClose} /> Minha conta
          </Offcanvas.Header>
          <Offcanvas.Body>
            <MenuMinhaConta />
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default MainNavMobile;