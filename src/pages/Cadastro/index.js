import Form from 'react-bootstrap/Form';
import ContentContainer from "../../components/Layout/ContentContainer"
import { IMaskInput } from "react-imask";
import "./cadastro.scoped.scss"

const Cadastro = () => {

    return (
        <ContentContainer>
            <Form>
                <div className="row">
                    <div className="col-10 col-md-6 col-lg-4">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>E-mail cadastrado</Form.Label>
                            <Form.Control type="email" placeholder="seu@email.com" disabled />
                        </Form.Group>
                    </div>
                    <div className="col-2 col-md-6 col-lg-3 d-flex align-items-end pb-3">
                        <Form.Text className="text-muted">
                            <a href="#">Editar</a>
                        </Form.Text>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <h2 className='page-title'>Complete seu cadastro</h2>
                    </div>
                </div>

                <fieldset>
                    <legend>Dados da empresa</legend>
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
                </fieldset>

                <fieldset>
                    <legend>Dados pessoais</legend>
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
                </fieldset>

                <fieldset>
                    <legend>Endereço</legend>
                    <div className="row">
                        <div className="col-8 col-md-6 col-lg-3">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>CEP *</Form.Label>
                                <Form.Control type="text" placeholder="" mask="00000-000" as={IMaskInput} />
                            </Form.Group>
                        </div>
                        <div className="col-4 col-md-6 col-lg-3 d-flex align-items-end pb-3">
                            <Form.Text className="text-muted">
                                <a href="#">Não sei meu CEP</a>
                            </Form.Text>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-8 col-lg-6">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Rua/Avenida/Logradouro</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Número</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Complemento</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Bairro</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Cidade</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Estado</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Selecione</option>
                                    <option value="sp">SP</option>
                                    <option value="mg">MG</option>
                                    <option value="rj">RJ</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Criar senha</legend>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Senha *</Form.Label>
                                <Form.Control type="password" placeholder="" />
                                <Form.Text className="text-muted">
                                    <a href="#">Instruções de como deve ser sua senha.</a>
                                </Form.Text>
                            </Form.Group>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Confirmar senha *</Form.Label>
                                <Form.Control type="password" placeholder="" />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-8 mt-3 mt-lg-0">


                            <Form.Check type="checkbox" id='aceite'>
                                <Form.Check.Input type="checkbox" />
                                <Form.Check.Label>Eu li e aceito os termos de uso da <a href="#">política de privacidade</a></Form.Check.Label>
                            </Form.Check>
                            <Form.Check type="checkbox" id='aceite'>
                                <Form.Check.Input type="checkbox" />
                                <Form.Check.Label>Eu li e aceito o uso dos <a href="#">termos e condições</a></Form.Check.Label>
                            </Form.Check>
                            <Form.Check type="checkbox" id='aceite'>
                                <Form.Check.Input type="checkbox" />
                                <Form.Check.Label> Assinar newsletter *</Form.Check.Label>
                            </Form.Check>

                        </div>
                        <div className="col-12 col-lg-4 mt-5  mt-lg-0">
                            <div className="d-grid">
                                <button className='button button-lg button-yellow'>Continuar</button>
                            </div>

                        </div>
                    </div>
                </fieldset>

            </Form>
        </ContentContainer>
    )
}

export default Cadastro;