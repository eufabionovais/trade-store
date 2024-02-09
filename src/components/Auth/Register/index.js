import React, { useState } from 'react';
import {
    Link,
} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Logo from "../../../assets/img/logo-acelera-pdv-horizontal.png";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

import "../auth.scss";

const Login = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <button className='login-link' onClick={handleShow}>Cadastre-se</button>


            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <img src={Logo} alt="" className='mx-auto' />
                    <h5>Informe seu e-mail</h5>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        <div className="row">
                            <div className="col-12">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>E-mail</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                            </div>
                            <div className="col-12 d-grid">

                                <button className="button button-lg button-yellow mt-2" onClick={handleClose}>
                                    Continue
                                </button>


                            </div>
                            <div className="col-12 disclaimer">
                                <p><a to="/">Esqueci a senha</a></p>
                                <p>Porque informar o e-mail?</p>
                                <p><CheckRoundedIcon className='check' />Verificar se já possuí cadastro em nossa loja</p>
                                <p><CheckRoundedIcon className='check' />Acelerar o preenchimento de suas informações</p>
                            </div>
                        </div>


                    </Form>


                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Login;