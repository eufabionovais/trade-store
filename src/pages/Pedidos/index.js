import React from 'react';
import BreadcrumbsComponent from "components/Layout/Breadcrumb";
import ContentContainer from "components/Layout/ContentContainer";
import PedidoResumoItem from "components/PedidoResumoItem";
import Form from 'react-bootstrap/Form';
import BaseSimpleBox from "components/BaseSimpleBox";
import MenuMinhaContaMobile from "components/MenuMinhaContaMobile";
import NewsLetter from "components/NewsLetter";
import Pagination from '@mui/material/Pagination';
import SidebarMinhaConta from "components/SidebarMinhaConta";

import "./pedidos.scss"
const Pedidos = () => {

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
										<h3 className='title'>Pedidos</h3>
										<div className="container-header__actions  mt-2 mt-lg-0">

											<div className="inline-select-wrapper">
												<label htmlFor="exibir">Mostrar</label>
												<Form.Select id="exibir" className='total-itens-exibicao' defaultValue="10">
													<option value="10">10</option>
													<option value="50">50</option>
													<option value="100">100</option>
												</Form.Select>
											</div>
											<span className="d-inline d-lg-none">
												<MenuMinhaContaMobile />
											</span>
										</div>
									</div>
								</div>
							</div>

							<BaseSimpleBox className={"container-pedidos"}>
								{
									pedidos.map((pedido) => {
										return (
											<PedidoResumoItem title={pedido.title} variant={pedido.status} key={pedido.id} pedido={pedido} />
										)
									})
								}
								<div className="actions my-5">
									<Pagination count={5} variant="outlined" color="primary" />
								</div>
							</BaseSimpleBox>

						</ContentContainer>
					</div>
				</div>
				<NewsLetter />

			</div>
		</>
	)
}

export default Pedidos;