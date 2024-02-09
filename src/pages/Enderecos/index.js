import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BreadcrumbsComponent from "components/Layout/Breadcrumb";
import ContentContainer from "components/Layout/ContentContainer";
import MenuMinhaConta from "components/MenuMinhaConta";
import ItemPedidoResumo from "components/PedidoResumoItem";
import BaseBox from "components/BaseBox";
import BaseSimpleBox from "components/BaseSimpleBox";
import MenuMinhaContaMobile from "components/MenuMinhaContaMobile";
import EnderecoBox from "components/EnderecoBox";
import NewsLetter from "components/NewsLetter";
import SidebarMinhaConta from "components/SidebarMinhaConta";

import "../MinhaConta/minha-conta.scss";

const Enderecos = () => {

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
										<h3 className='title'>Endereços</h3>
										<div className="container-header__actions mt-2 mt-lg-0">
											<Link to="/" className='link-light-blue'>Adicionar endereço</Link>
											<span className="d-inline d-lg-none">
												<MenuMinhaContaMobile />
											</span>
										</div>
									</div>
								</div>
							</div>

							<BaseSimpleBox >

								<BaseBox className={'my-4'}>

									<div className="content-card">

										<div className="content-card__body padded">

											<EnderecoBox />

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

export default Enderecos;