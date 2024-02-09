import React from 'react';
import BreadcrumbsComponent from "components/Layout/Breadcrumb";
import ContentContainer from "components/Layout/ContentContainer";
import PedidoResumoItem from "components/PedidoResumoItem";
import Form from 'react-bootstrap/Form';
import BaseSimpleBox from "components/BaseSimpleBox";
import MenuMinhaContaMobile from "components/MenuMinhaContaMobile";
import NewsLetter from "components/NewsLetter";
import Pagination from '@mui/material/Pagination';
import PedidoItens from "components/PedidoItens";
import SidebarMinhaConta from "components/SidebarMinhaConta";
import "../../assets/icomoon-v1.0/style.css";

import "./pedidos-detalhes.scss"
const PedidosDetalhes = () => {


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
										<h3 className='xl'>Detalhes do Pedido</h3>
										<div className="container-header__actions  mt-2 mt-lg-0">
											<MenuMinhaContaMobile />
										</div>
									</div>

								</div>
							</div>

							<div className="container-content">
								<div className="resumo-pedido__wrapper">
									<table className="table resumo-pedido-header">
										<tbody>
											<tr>
												<td>
													<h4 className='resumo-pedido__title'>Pedido: &nbsp; <span>10000000028</span></h4>
													<p>Realizado dia 25/06/2022</p>
												</td>
												<td>
													<p>Vendido e entregue por:</p>
													<p>Quantum Internacional Distribuidora</p>
												</td>
											</tr>
											<tr>
												<td>
													<h4 className='resumo-pedido__title'><i className="icon icon-truck"></i>Endereço de entrega</h4>

													<p>
														Av 15 de Novembro, 761<br />
														Jardim Umuarama<br />
														São Paulo - SP<br />
														04631-300
													</p>
												</td>
												<td>
													<h4 className='resumo-pedido__title'><i className="icon icon-payment"></i>Resumo da compra</h4>
													<dl>
														<div className="resumo-item">
															<dt><b>Forma de Pagamento</b></dt>
															<dd><b>Boleto</b></dd>
														</div>
														<div className="resumo-item">
															<dt>Subtotal de produtos</dt>
															<dd>R$10.000,00</dd>
														</div>
														<div className="resumo-item">
															<dt><b>Frete</b></dt>
															<dd><b>Grátis</b></dd>
														</div>
														<div className="resumo-item">
															<dt>Subtotal de produtos</dt>
															<dd>R$10.000,00</dd>
														</div>
														<div className="resumo-item total">
															<dt>Valor total</dt>
															<dd><b>R$10.000,00</b></dd>
														</div>
													</dl>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>

							<BaseSimpleBox className={"container-pedidos my-4"}>
								<PedidoResumoItem title="Pedido realizado" variant="success" statusOnly pedido={pedidos[1]}>
									<div className="row align-items-center">
										<div className="col-6">
											<h5 className='block-title'>Itens do Pedido</h5>
										</div>
										<div className="col-6 flex justify-content-end">
											<div className="inline-select-wrapper">
												<label htmlFor="exibir">Mostrar</label>
												<Form.Select id="exibir" className='total-itens-exibicao'>
													<option value="10" defaultValue>10</option>
													<option value="50">50</option>
													<option value="100">100</option>
												</Form.Select>
											</div>
										</div>
									</div>

									<PedidoItens />

									<div className="actions mt-5 mb-3">
										<Pagination count={5} variant="outlined" color="primary" />
									</div>
								</PedidoResumoItem>
							</BaseSimpleBox>
						</ContentContainer>
					</div >
				</div>
				<NewsLetter />

			</div >
		</>
	)
}

export default PedidosDetalhes;