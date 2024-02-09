import React from 'react';
import BreadcrumbsComponent from "components/Layout/Breadcrumb";
import ContentContainer from "components/Layout/ContentContainer";
import MenuSobreNosMobile from "components/MenuSobreNosMobile";
import NewsLetter from "components/NewsLetter";
import SidebarSobreNos from "components/SidebarSobreNos";


import "./politica-troca-reembolsos.scss"
const PoliticaTrocasReembolsos = () => {

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

										<h3 className='xl'>Politica de trocas e reembolsos
										</h3>

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
									<p>Cada distribuidor parceiro possui sua própria política de trocas e devoluções. No momento do recebimento, faça sempre a conferência dos itens do pedido e de suas respectivas quantidades.</p>

									<p>No caso de dúvidas, entre em contato com nosso time de atendimento via whatsapp 11 95065 9221, de segunda a sexta-feira, das 8:00 às 17:00 ou pelo chat ou e-mail disponíveis no www.acelerapdv.</p>

									<p>Nunca aceite um produto com o caixa/lacre rompido. Caso exista algum problema (lacre rompido, avaria, ausência de algum item ou divergência entre Nota Fiscal e conteúdo), a entrega pode ser recusada e informado, no verso da Nota Fiscal, o motivo da recusa para o motorista e entre em contato imediatamente com nosso time de atendimento via whatsapp 11 95065 9221, de segunda a sexta-feira, das 8:00 às 17:00 ou pelo chat ou e-mail disponíveis no www.acelerapdv.</p>
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

export default PoliticaTrocasReembolsos;