import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import MenuIcon from '@mui/icons-material/Menu';
import Accordion from 'react-bootstrap/Accordion';
import menuData from "../../Layout/MainNav/main-menu.js";
import MiniCart from "../../MiniCart";
import Greeting from "../../Greeting";
import "../MainNavMobile/main-nav-mobile.scss";

function MainNavMobile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>


      <div className="main-nav-mobile">
        <Button onClick={handleShow}>
          <MenuIcon className="toggle-menu-icon" />
        </Button>


        <Offcanvas show={show} onHide={handleClose} className="offcanvas-menu-mobile">
          <Offcanvas.Header closeButton>
            <Greeting isLoggedIn={true} />
            <MiniCart variant={"white"} />
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Accordion defaultActiveKey="0" className='accordion-menu-mobile'>

              {

                menuData.map((menuItem, menuItemIndex) => {
                  return (

                    <Accordion.Item eventKey={menuItemIndex} key={JSON.stringify(menuItem)}>
                      <Accordion.Header>{menuItem.title}</Accordion.Header>
                      {menuItem.submenu &&
                        <Accordion.Body>
                          {
                            menuItem.submenu && menuItem.submenu.map((submenuItem) => {
                              return (
                                <div className="submenu" key={JSON.stringify(submenuItem)}>
                                  <p>{submenuItem.title}</p>
                                  {
                                    submenuItem.items.slice(0, 3).map((item) => {
                                      return (
                                        <a key={JSON.stringify(item)} href={item.path}>{item.title}</a>
                                      )
                                    })
                                  }
                                  {
                                    submenuItem.items.length > 3 && <a href="#" className='show-more'>+ ver mais</a>
                                  }
                                </div>)
                            })
                          }
                        </Accordion.Body>
                      }
                    </Accordion.Item>

                  )
                })
              }

            </Accordion>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default MainNavMobile;