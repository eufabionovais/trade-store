import IconUser from "../../assets/img/icons/icon-user.svg";
import Dropdown from 'react-bootstrap/Dropdown';
import Login from "../../components/Auth/Login";
import Register from "../../components/Auth/Register";
import "./greeting.scss";

const Greeting = ({isLoggedIn}) => {
    return (
        <div className="greeting-logged-out mr-auto">
            <div className="icon">
                <img src={IconUser} alt="" />
            </div>

            {
                !isLoggedIn ? 
                <div className="content">
                <p><strong>Bem-vindo :)</strong></p>
                <p><Login /> ou <Register /></p>                                
            </div>

                : 


                <div className="content logged-in">
                <p><strong>Olá, Pedro!</strong> <a href="#" className="account-link">minha conta</a></p>
                <div className="user-info">
                    <p>12.345.678/0001-10</p>

                    <Dropdown className="account-dropdown">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            
                        </Dropdown.Toggle>

                        <Dropdown.Menu align="end">
                            <Dropdown.Item href="#/action-1">Item 1</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Item 2</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Item 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>                    

                </div>
            </div>

            }

           


        </div>
    )
}

export default Greeting;