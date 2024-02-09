import React from 'react';
import BreadcrumbsComponent from "components/Layout/Breadcrumb";
import ContentContainer from "components/Layout/ContentContainer";
import ItemPedidoResumo from 'components/PedidoResumoItem';
import BaseBox from "components/BaseBox";
import BaseSimpleBox from "components/BaseSimpleBox";
import MenuMinhaContaMobile from "components/MenuMinhaContaMobile";
import NewsLetter from "components/NewsLetter";
import EnderecoBox from "components/EnderecoBox";
import SidebarMinhaConta from "components/SidebarMinhaConta";

import "./minha-conta.scss"
const MinhaConta = () => {

	const pedidos = [
		{
			id: 1,
			title: "Pedido realizado",
			status: "success",
			activeStep: 4,
			steps: [
				{
					status: "completed",
					date: "10/10/2020",
					icon: "payment",
					text: "Aguardando pagamento"
				},
				{
					status: "completed",
					date: "10/10/2020",
					icon: "transportation",
					text: "Em separação"
				},
				{
					status: "active",
					date: "10/10/2020",
					icon: "truck",
					text: "Em transporte"
				},
				{
					status: "",
					date: "10/10/2020",
					icon: "home",
					text: "Entregue"
				}
			]
		},
		{
			id: 2,
			title: "Pedido realizado",
			status: "success",
			activeStep: 2,
			steps: [
				{
					status: "completed",
					date: "10/10/2020",
					icon: "payment",
					text: "Aguardando pagamento"
				},
				{
					status: "active",
					date: "10/10/2020",
					icon: "transportation",
					text: "Em separação"
				},
				{
					status: "",
					date: "10/10/2020",
					icon: "truck",
					text: "Em transporte"
				},
				{
					status: "",
					date: "10/10/2020",
					icon: "home",
					text: "Entregue"
				}
			]
		},
		{
			id: 3,
			title: "Pedido cancelado",
			status: "error",
			activeStep: 2,
			steps: [
				{
					status: "completed",
					date: "10/10/2020",
					icon: "payment",
					text: "Aguardando pagamento"
				},
				{
					status: "canceled",
					date: "10/10/2020",
					icon: "x",
					text: "cancelado"
				},
				{
					status: "",
					date: "10/10/2020",
					icon: "truck",
					text: "Em transporte"
				},
				{
					status: "",
					date: "10/10/2020",
					icon: "home",
					text: "Entregue"
				}
			]
		}
	]

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
										<div>
											<h3 className='xl'>Olá, Pedro Melo!</h3>
											<p>Bem-vindo a sua conta :)</p>
											<p>Aqui você acompanha seus pedidos e nos ajuda a te conhecer ainda mais.</p>
										</div>

										<div className="container-header__actions mt-2 mt-lg-0">
											<button className='button button-md button-light-blue'>Alterar senha</button>
											<span className="d-inline d-lg-none">
												<MenuMinhaContaMobile />
											</span>
										</div>
									</div>

								</div>
							</div>

							<BaseSimpleBox className={"container-pedidos"} title="Pedidos">
								{
									pedidos.map((pedido) => {
										return (
											<ItemPedidoResumo title={pedido.title} variant={pedido.status} pedido={pedido} key={pedido.id} />
										)
									})
								}
								{/* <ItemPedidoResumo title="Pedido realizado" variant="success" />
								<ItemPedidoResumo title="Pedido cancelado" variant="error" /> */}
								<div className="actions">
									<button className="button button-yellow">Ver todos os pedidos</button>
								</div>
							</BaseSimpleBox>


							<BaseSimpleBox title="Informações">
								<BaseBox>
									<div className="content-card">
										{/* <header className="content-card__header">
											<h4 className="content-card__title">
												Contato
											</h4>
										</header> */}
										<div className="content-card__body">

											<EnderecoBox showContact showLink />
											{/* <div className="row d-flex align-items-center">
												<div className="col-6">
													<p>Pedro Melo</p>
													<p><a href="/">pedromello@quantuminternacional.com.br</a></p>
												</div>
												<div className="col-6 justify-content-end d-flex">
													<button className="button button-md button-light-blue">
														Alterar senha
													</button>
												</div>
											</div>
											<div className="enderecos-container">

												<div className="box-endereco">
													<h4 className="content-card__title d-flex justify-content-between align-items-center">
														<span>Endereço de</span>
														<a href="/">Gerenciar endereço</a>
													</h4>
													<p>Pedro Mello</p>
													<p>Quantum Internacional Distribuidora</p>
													<p>Avenida Interlagos, 3665</p>
													<p>Jardim Umuarama</p>
												</div>

												<div className="box-endereco">
													<h4 className="content-card__title d-flex justify-content-between align-items-center">
														<span>Endereço de</span>
														<a href="/">Gerenciar endereço</a>
													</h4>
													<p>Pedro Mello</p>
													<p>Quantum Internacional Distribuidora</p>
													<p>Avenida Interlagos, 3665</p>
													<p>Jardim Umuarama</p>
												</div>
											</div> */}

										</div>
									</div>

								</BaseBox>
							</BaseSimpleBox>


						</ContentContainer>


					</div>
				</div>


				<NewsLetter />

			</div>
		</>
	)
}

export default MinhaConta;