import React from 'react';
import BreadcrumbsComponent from "components/Layout/Breadcrumb";
import ContentContainer from "components/Layout/ContentContainer";
import MenuSobreNosMobile from "components/MenuSobreNosMobile";
import NewsLetter from "components/NewsLetter";
import SidebarSobreNos from "components/SidebarSobreNos";


import "./policita-privacidade-seguranca.scss"
const PoliticaPrivacidadeSeguranca = () => {

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

										<h3 className='xl'>Política de Privacidade e Segurança</h3>

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


									<p>A Acelera PDV compromete-se com a segurança e a privacidade dos dados dos USUÁRIOS, de forma que:</p>

									<p>Não registra dados de cartão de débito ou crédito dos USUÁRIOS e, em hipótese alguma, os fornece a terceiros;</p>

									<p>Não fornece a terceiros quaisquer outros dados cadastrais dos USUÁRIOS, exceto quando legalmente permitidos e estritamente necessários à operacionalização do processo de compra ou por determinação da autoridade judicial competente;</p>

									<p>Não distribui spam e todas as mensagens institucionais enviadas ao usuário, via correio eletrônico, sempre poderão ser desabilitadas através de link constante da própria mensagem ou a qualquer momento através do Canal de Atendimento;</p>

									<p>Nunca solicitará ao usuário a senha, nome do usuário, informações de cartão de crédito ou outras informações pessoais através de e-mail ou com anexos executáveis (extensão exe, com, scr, bat) e links para download, de forma que alerta expressamente no sentido de que qualquer solicitação recebida nesses termos seja ignorada;</p>

									<p>Adota os níveis legalmente requeridos quanto à segurança na proteção de dados, tendo instalado todos os meios e medidas técnicas ao seu alcance para evitar a perda, mau uso, alteração, acesso não autorizado ou subtração indevida dos dados pessoais recolhidos.</p>
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

export default PoliticaPrivacidadeSeguranca;