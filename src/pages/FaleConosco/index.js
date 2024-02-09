import React from 'react';
import BreadcrumbsComponent from "components/Layout/Breadcrumb";
import ContentContainer from "components/Layout/ContentContainer";
import MenuSobreNosMobile from "components/MenuSobreNosMobile";
import NewsLetter from "components/NewsLetter";
import SidebarSobreNos from "components/SidebarSobreNos";
import { IMaskInput } from "react-imask";
import Form from 'react-bootstrap/Form';

import "./fale-conosco.scss"
const FaleConosco = () => {

	return (
		<>
			<BreadcrumbsComponent />
			<div className="container">
				<div className="row">
					<div className="col-3 d-none d-lg-block">
						<ContentContainer padding="none">
							<SidebarSobreNos />
						</ContentContainer>
					</div>
					<div className="col-12 col-lg-9">
						<ContentContainer padding="none">
							<div className="container-header">
								<div className="row">
									<div className="col-12 d-flex align-items-center justify-content-between">

										<h3 className='xl'>Fale conosco</h3>

										<div className="container-header__actions">
											<span className="d-inline d-lg-none">
												<MenuSobreNosMobile />
											</span>
										</div>
									</div>

								</div>
							</div>

							<div className="container-content my-3">

								<div className="fale-conosco__intro">
									<p>Ficou com alguma dúvida ou quer contribuir com alguma sugestão?</p>
									<p>Entre em contato conosco =)</p>

									<div className="fale-conosco__contatos">
										<p>E-mail:  <a href="mailto:contato@acelerapdv.com.br">contato@acelerapdv.com.br</a></p>
										<p>Whatsapp: <a href="https://wa.me/5511950659221" target="_blank">11 95065 9221</a></p>
									</div>
								</div>

								<p>
									Entraremos em contato o mais breve possível.
								</p>

								<div className="fale-conosco__form-wrapper">
									<Form>
										<div className="row">
											<div className="col-12 col-md-6 mb-2">
												<Form.Group className="mb-3" controlId="nome">
													<Form.Label>Nome</Form.Label>
													<Form.Control type="text" id="nome" placeholder="Insira seu nome" />
												</Form.Group>
											</div>
											<div className="col-12 col-md-6 mb-2">
												<Form.Group className="mb-3" controlId="telefone">
													<Form.Label>Telefone</Form.Label>
													<Form.Control type="text" id="telefone" placeholder="(XX) XXXX-XXXX" as={IMaskInput}
														mask="(00) 0000-0000" />
												</Form.Group>
											</div>
											<div className="col-12 mb-2">
												<Form.Group className="mb-3" controlId="email">
													<Form.Label>E-mail</Form.Label>
													<Form.Control type="email" id="email" placeholder="Insira seu email" />
												</Form.Group>
											</div>
											<div className="col-12 mb-2">
												<Form.Group className="mb-3" controlId="mensagem">
													<Form.Label>Escreva sua mensagem</Form.Label>
													<Form.Control as="textarea" id="mensagem" type="textarea" placeholder="Insira sua mensagem" />
												</Form.Group>
											</div>
											<div className="col-12 d-flex justify-content-end">
												<button type="submit" className='button button-md button-yellow'>Enviar</button>
											</div>
										</div>
									</Form>
								</div>
							</div>
						</ContentContainer>
					</div>
				</div>
				<NewsLetter />
			</div>
		</>
	)
}

export default FaleConosco;