import React from 'react';
import BreadcrumbsComponent from "components/Layout/Breadcrumb";
import ContentContainer from "components/Layout/ContentContainer";
import BaseBox from "components/BaseBox";
import MenuSobreNosMobile from "components/MenuSobreNosMobile";
import NewsLetter from "components/NewsLetter";
import SidebarSobreNos from "components/SidebarSobreNos";
import LogoCampanha from "../../assets/img/logo-acelera-pdv-horizontal.png"
import QuemSomosMenuItem from "components/QuemSomosMenuItem";

import "./sobre-nos.scss"
const SobreNos = () => {

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

										<h3 className='xl'>Sobre nós</h3>

										<div className="container-header__actions">
											<span className="d-inline d-lg-none">
												<MenuSobreNosMobile />
											</span>
										</div>
									</div>

								</div>
							</div>

							<div className="container-content my-5">
								<BaseBox className={'container-quem-somos'}>
									<header className="base-box__header">
										<div className="base-box__header__content">
											<h3 className="xl">
												Quem somos
											</h3>
											<img src={LogoCampanha} />
										</div>
									</header>
									<div className='quem-somos__intro'>
										<h4 className="quem-somos__subtitle--1">
											Nossa missão é ressignificar o mercado de compras online B2B fortalecendo o varejo através da democracia das condições comerciais que muitas vezes são exclusivas de grandes redes.


										</h4>
										<h4 className="quem-somos__subtitle--2">
											Somos mais do um marketplace, somos uma plataforma de distribuição que inaugura o conceito de digistribuição. Conectamos em nossa plataforma apenas distribuidores homologados pela de bens de consumo, garantindo para o varejo sortimento e credibilidade na entrega.
										</h4>
										<p>Nossa plataforma esta em constante aperfeiçoamento, aos poucos estamos evoluindo e conectando cada vez mais distribuidores e indústrias para oferecer ao varejo o que há de melhor na cadeia de vendas e distribuição em todo território nacional. Se você tiver alguma sugestão de melhoria em nossa plataforma, por favor entre em contato conosco, a sua experiência de compra é o que mais importa para nós!

										</p>
									</div>

									<div className="quem-somos__menu-wrapper">
										{
											menuQuemSomosItems.map((menuItem, index) => {
												return (
													<QuemSomosMenuItem menuItem={menuItem} key={index} />
												)
											})
										}



									</div>
								</BaseBox>
							</div>




						</ContentContainer>


					</div>
				</div>


				<NewsLetter />

			</div>
		</>
	)
}

export default SobreNos;