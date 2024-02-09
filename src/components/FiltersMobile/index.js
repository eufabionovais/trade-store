import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import IconFilter from "../../assets/img/icons/icon-filter.svg"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import FilterGroup from "components/FiltersList";
import FilterPreco from "components/FiltroPreco";
import "../FiltersMobile/filter-mobile.scss";

function MainNavMobile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>


      <div className="filter-mobile"> 

        <Button onClick={handleShow} className='d-lg-none btn-filtrar'>Filtrar <img src={IconFilter} alt="" /></Button>


        <Offcanvas show={show} onHide={handleClose} className="offcanvas-filtros-mobile">
          <Offcanvas.Header closeButton>
             <KeyboardBackspaceIcon onClick={handleClose} /> Filtre sua pesquisa
          </Offcanvas.Header>
          <Offcanvas.Body>
                <FilterGroup title="Categoria" maxHeight={'auto'} />
                <FilterGroup title="Embalagem" maxHeight={'auto'} />
                <FilterGroup title="Indústria" maxHeight={'auto'} />
                <FilterGroup title="Marca"  maxHeight={'auto'} />
                <FilterPreco />
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default MainNavMobile;