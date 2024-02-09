import React from 'react';
import BreadcrumbsComponent from "components/Layout/Breadcrumb";
import ContentContainer from "components/Layout/ContentContainer";
import MenuSobreNosMobile from "components/MenuSobreNosMobile";
import NewsLetter from "components/NewsLetter";
import SidebarSobreNos from "components/SidebarSobreNos";


import "./politica-entrega.scss"
const PoliticaEntrega = () => {

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

										<h3 className='xl'>Política de Entrega</h3>

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


									<p>O prazo para entrega dos produtos varia de acordo com a localidade, a forma de pagamento escolhida e o tipo de frete, fazemos de tudo para que nossos clientes recebam os produtos de forma rápida e segura através dos distribuidores conectados na plataforma.</p>

									<p>A operação logística desde a separação do pedido até entrega é de inteira responsabilidade dos vendedores.</p>

									<p>O prazo de entrega é contado a partir da confirmação do pagamento em dias úteis, ou seja, não inclui sábados, domingos e feriados.</p>

									<p>No caso de compra de produtos de vendedores diferentes, o produto de cada vendedor terá um frete e serão entregues separadamente. Da mesma forma que caso seja comprado mais de um produto de um mesmo vendedor os produtos podem ser entregues separadamente.</p>

									<p>As entregas podem ser efetuadas de segunda-feira a sexta-feira, das 8h às 21h.</p>

									<p>Excepcionalmente entregas podem ocorrer aos sábados, domingos e feriados.</p>

									<p>É importante que, no endereço solicitado, tenha uma pessoa autorizada pelo comprador(a), maior de 18 anos, e portando documento de identificação para receber a mercadoria e assinar o protocolo.</p>

									<p>A Nota Fiscal acompanhará o produto.</p>
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

export default PoliticaEntrega;