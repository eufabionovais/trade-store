import React from 'react';
import Form from 'react-bootstrap/Form';
import { IMaskInput } from "react-imask";
import BreadcrumbsComponent from "components/Layout/Breadcrumb";
import ContentContainer from "components/Layout/ContentContainer";
import BaseSimpleBox from "components/BaseSimpleBox";
import MenuMinhaContaMobile from "components/MenuMinhaContaMobile";
import NewsLetter from "components/NewsLetter";
import SidebarMinhaConta from "components/SidebarMinhaConta";

import "./dados-pessoais.scss";
const DadosPessoais = () => {

    return (
        <>
            <BreadcrumbsComponent />
            <div className="container">
                <div className="row">
                    <div className="col-3 d-none d-lg-block">
                        <ContentContainer padding="none">
                            <SidebarMinhaConta />
                        </ContentContainer>
                    </div>
                    <div className="col-12 col-lg-9">
                        <ContentContainer padding="none">
                            <div className="container-header">
                                <div className="row">
                                    <div className="col-12 d-lg-flex align-content-center justify-content-between">
                                        <h3 className='xl'>Dados Pessoais</h3>
                                        <div className="container-header__actions mt-2 mt-lg-0">
                                            <button className='button button-md button-light-blue'>Alterar senha</button>
                                            <span className="d-inline d-lg-none">
                                                <MenuMinhaContaMobile />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <BaseSimpleBox className={"container-pedidos"}>
                                <Form>
                                    <div className="row">
                                        <div className="col-10 col-md-6 col-lg-4">
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Tipo de Pessoaa</Form.Label>
                                                <Form.Control type="text" value="Jurídica" disabled />
                                            </Form.Group>
                                        </div>
                                    </div>



                                    <div className="row">
                                        <div className="col-12 col-md-4 col-lg-3">
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Nome da empresa *</Form.Label>
                                                <Form.Control type="text" placeholder="" />
                                            </Form.Group>
                                        </div>
                                        <div className="col-12 col-md-4 col-lg-3">
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Nome fantasia</Form.Label>
                                                <Form.Control type="text" placeholder="" />
                                            </Form.Group>
                                        </div>
                                        <div className="col-12 col-md-4 col-lg-3">
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>CNPJ *</Form.Label>
                                                <Form.Control type="text" placeholder="XX.XXX.XXX/XXXX-XX" as={IMaskInput}
                                                    mask="00.000.000/0000-00" />
                                            </Form.Group>
                                        </div>
                                        <div className="col-12 col-md-4 col-lg-3">
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>I.E (Inscrição Estadual)</Form.Label>
                                                <Form.Control type="text" placeholder="" />
                                            </Form.Group>
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-3">
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Nome *</Form.Label>
                                                <Form.Control type="text" placeholder="" />
                                            </Form.Group>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-3">
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Sobrenome *</Form.Label>
                                                <Form.Control type="text" placeholder="" />
                                            </Form.Group>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-3">
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Celular *</Form.Label>
                                                <Form.Control type="text" placeholder="(XX) XXXXX-XXXX" as={IMaskInput}
                                                    mask="(00) 00000-0000" />
                                            </Form.Group>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-3">
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Telefone fixo *</Form.Label>
                                                <Form.Control type="text" placeholder="(XX) XXXX-XXXX" as={IMaskInput}
                                                    mask="(00) 0000-0000" />
                                            </Form.Group>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-3">
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Endereço de e-mail *</Form.Label>
                                                <Form.Control type="email" placeholder="email@email.com.br" />
                                            </Form.Group>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-3">
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Data de Nascimento *</Form.Label>
                                                <Form.Control type="text" placeholder="DD/MM/AAAA" as={IMaskInput}
                                                    mask="00/00/0000" />
                                            </Form.Group>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-3">
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>CPF *</Form.Label>
                                                <Form.Control type="text" placeholder="000.000.000-00" as={IMaskInput}
                                                    mask="000.000.000-00" />
                                            </Form.Group>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-3">
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>RG *</Form.Label>
                                                <Form.Control type="text" placeholder="00.000.000-0" as={IMaskInput}
                                                    mask="00.000.000-0" />
                                            </Form.Group>
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-12 col-lg-8 mt-3 mt-lg-0">


                                            <Form.Check type="checkbox" id='novidades'>
                                                <Form.Check.Input type="checkbox" />
                                                <Form.Check.Label>Receber novidades e promoções</Form.Check.Label>
                                            </Form.Check>


                                        </div>

                                    </div>

                                    <div className="row mt-4 justify-content-end">
                                        <div className="col-12 col-lg-4 mt-4 justify-content-end  mt-lg-0 d-flex justify-content-end">

                                            <button className='button button-lg button-yellow w-100'>Salvar</button>

                                        </div>
                                    </div>


                                </Form>
                            </BaseSimpleBox>





                        </ContentContainer>


                    </div>
                </div>


                <NewsLetter />

            </div>
        </>
    )
}

export default DadosPessoais;