import React from 'react';
import BreadcrumbsComponent from "components/Layout/Breadcrumb";
import ContentContainer from "components/Layout/ContentContainer";
import MenuSobreNosMobile from "components/MenuSobreNosMobile";
import NewsLetter from "components/NewsLetter";
import SidebarSobreNos from "components/SidebarSobreNos";


import Accordion from 'react-bootstrap/Accordion';

import "./termos-condicoes-vendedor.scss"
const TermosCondicoesVendedor = () => {

	const menuQuemSomosItems = [
		{
			text: "Termos e condições do vendedor",
			icon: "sheet",
			path: "/",
		},
		{
			text: "Termos e condições do comprador",
			icon: "sheet",
			path: "/",
		},
		{
			text: "Política de entrega",
			icon: "truck",
			path: "/",
		},
		{
			text: "Política de Privacidade e Segurança",
			icon: "lock",
			path: "/",
		},
		{
			text: "Politica de trocas e reembolsos",
			icon: "sync",
			path: "/",
		},
		{
			text: "Fale conosco",
			icon: "phone",
			path: "/",
		},
		{
			text: "Trabalhe conosco",
			icon: "folder",
			path: "/",
		}


	]



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

										<h3 className='xl'>Termos e condições do vendedor</h3>

										<div className="container-header__actions">
											<span className="d-inline d-lg-none">
												<MenuSobreNosMobile />
											</span>
										</div>
									</div>

								</div>
							</div>

							<div className="container-content my-3">

								<div className="regulamentos__intro">

									<h4 className="quem-somos__subtitle--2">
										Somos mais do um marketplace, somos uma plataforma de distribuição que inaugura o conceito de digistribuição. Conectamos em nossa plataforma apenas distribuidores homologados pela de bens de consumo, garantindo para o varejo sortimento e credibilidade na entrega.ACELERAPDV SERVICOS DIGITAIS LTDA, pessoa jurídica de direito privado, inscrita no CNPJ sob o nº 39.989.014/0001-15 , aqui denominada simplesmente Acelera pdv, estabelece o presente TERMO DE USO, a fim de regular o acesso e utilização, por parte dos VENDEDORES, dos serviços disponibilizados no site www.acelerapdv.com.br.
									</h4>
								</div>

								<div className="regulamentos__itens">
									<Accordion className='regulamentos-accordion' >
										<Accordion.Item eventKey="0">
											<Accordion.Header>1. DEFINIÇÕES</Accordion.Header>
											<Accordion.Body>
												<p>1.1. Para fins deste termo de uso, considera-se:</p>
												<p>- COMPRADOR é toda pessoa física ou jurídica que se cadastra com o objetivo de realizar compras através do site da Acelera pdv.</p>
												<p>- VENDEDOR é toda pessoa jurídica que disponibiliza produtos para comercialização através do site da Acelera pdv.</p>
												<p>- INTERMEDIADOR FINANCEIRO é o fornecedor do serviço de pagamento on line, responsável pela intermediação de transações financeiras entre o Acelera pdv, COMPRADOR e VENDEDOR, possibilitando a realização e o recebimento de pagamentos através da internet.</p>
												<p>- SITE é o conjunto de páginas e serviços disponibilizados no domínio www.acelerapdv.com.br.</p>
												<p>- Todos os prazos constantes neste Termo de Uso consideram-se como úteis, ou seja, aqueles transcorridos em dias da semana, exceto sábados, domingos e feriados.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="1">
											<Accordion.Header>2. ADESÃO AOS SERVIÇOS DISPONIBILIZADOS NO SITE </Accordion.Header>
											<Accordion.Body>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
												eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
												minim veniam, quis nostrud exercitation ullamco laboris nisi ut
												aliquip ex ea commodo consequat. Duis aute irure dolor in
												reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
												pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
												culpa qui officia deserunt mollit anim id est laborum.
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="2">
											<Accordion.Header>3. SERVIÇOS DISPONIBILIZADOS  </Accordion.Header>
											<Accordion.Body>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
												eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
												minim veniam, quis nostrud exercitation ullamco laboris nisi ut
												aliquip ex ea commodo consequat. Duis aute irure dolor in
												reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
												pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
												culpa qui officia deserunt mollit anim id est laborum.
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="3">
											<Accordion.Header>4. POLÍTICA DE PRIVACIDADE E SEGURANÇA DE DADOS </Accordion.Header>
											<Accordion.Body>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
												eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
												minim veniam, quis nostrud exercitation ullamco laboris nisi ut
												aliquip ex ea commodo consequat. Duis aute irure dolor in
												reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
												pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
												culpa qui officia deserunt mollit anim id est laborum.
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="4">
											<Accordion.Header>5. CADASTRAMENTO DE PRODUTOS </Accordion.Header>
											<Accordion.Body>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
												eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
												minim veniam, quis nostrud exercitation ullamco laboris nisi ut
												aliquip ex ea commodo consequat. Duis aute irure dolor in
												reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
												pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
												culpa qui officia deserunt mollit anim id est laborum.
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="5">
											<Accordion.Header>6. PROCESSO DE VENDA</Accordion.Header>
											<Accordion.Body>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
												eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
												minim veniam, quis nostrud exercitation ullamco laboris nisi ut
												aliquip ex ea commodo consequat. Duis aute irure dolor in
												reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
												pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
												culpa qui officia deserunt mollit anim id est laborum.
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="6">
											<Accordion.Header>7. DO ATENDIMENTO AOS COMPRADORES  </Accordion.Header>
											<Accordion.Body>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
												eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
												minim veniam, quis nostrud exercitation ullamco laboris nisi ut
												aliquip ex ea commodo consequat. Duis aute irure dolor in
												reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
												pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
												culpa qui officia deserunt mollit anim id est laborum.
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="7">
											<Accordion.Header>8. LICENÇA DE USO E REMUNERAÇÃO  </Accordion.Header>
											<Accordion.Body>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
												eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
												minim veniam, quis nostrud exercitation ullamco laboris nisi ut
												aliquip ex ea commodo consequat. Duis aute irure dolor in
												reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
												pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
												culpa qui officia deserunt mollit anim id est laborum.
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="8">
											<Accordion.Header>9. RESPONSABILIDADES DO VENDEDOR  </Accordion.Header>
											<Accordion.Body>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
												eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
												minim veniam, quis nostrud exercitation ullamco laboris nisi ut
												aliquip ex ea commodo consequat. Duis aute irure dolor in
												reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
												pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
												culpa qui officia deserunt mollit anim id est laborum.
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="9">
											<Accordion.Header>10. SANÇÕES PELO DESCUMPRIMENTO  </Accordion.Header>
											<Accordion.Body>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
												eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
												minim veniam, quis nostrud exercitation ullamco laboris nisi ut
												aliquip ex ea commodo consequat. Duis aute irure dolor in
												reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
												pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
												culpa qui officia deserunt mollit anim id est laborum.
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="10">
											<Accordion.Header>11. PRAZO, ALTERAÇÕES E RESCISÃO  </Accordion.Header>
											<Accordion.Body>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
												eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
												minim veniam, quis nostrud exercitation ullamco laboris nisi ut
												aliquip ex ea commodo consequat. Duis aute irure dolor in
												reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
												pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
												culpa qui officia deserunt mollit anim id est laborum.
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="11">
											<Accordion.Header>12. LEI APLICÁVEL E JURISDIÇÃO </Accordion.Header>
											<Accordion.Body>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
												eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
												minim veniam, quis nostrud exercitation ullamco laboris nisi ut
												aliquip ex ea commodo consequat. Duis aute irure dolor in
												reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
												pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
												culpa qui officia deserunt mollit anim id est laborum.
											</Accordion.Body>
										</Accordion.Item>


									</Accordion>
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

export default TermosCondicoesVendedor;