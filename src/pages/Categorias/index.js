import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BreadcrumbsComponent from "components/Layout/Breadcrumb";
import ContentContainer from "components/Layout/ContentContainer";
import FilterGroup from "components/FiltersList";
import FiltroPreco from "components/FiltroPreco";
import ProdutoItem from "components/ProductItem";
import Pagination from '@mui/material/Pagination';
import Dropdown from 'react-bootstrap/Dropdown';
import NewsLetter from "components/NewsLetter";
import FiltersMobile from "../../components/FiltersMobile"

import "./categorias.scss"
const Categorias = () => {

    const produtos = [
        {
            id: 1,
            title: "Kitano Oregano 3g",
            image: "/assets/img/produtos/produto-1.png",
            estoque: 10,
        },
        {
            id: 2,
            title: "Toalha Hipoalergênica Limpeza Suave, Johnson's, 44 Unidades",
            image: "/assets/img/produtos/produto-2.png",
            estoque: 10,
        },
        {
            id: 3,
            title: "Biscoito Pit Stop Original Marilan 162g",
            image: "/assets/img/produtos/produto-3.png",
            estoque: 10,
        },
        {
            id: 4,
            title: "Protetor Solar Praia e Piscina FPS 50, Sundown, 350 ML ",
            image: "/assets/img/produtos/produto-4.png",
            estoque: 0,
        },
        {
            id: 5,
            title: "Kitano Oregano 3g",
            image: "/assets/img/produtos/produto-1.png",
            estoque: 0,
        },
        {
            id: 6,
            title: "Toalha Hipoalergênica Limpeza Suave, Johnson's, 44 Unidades",
            image: "/assets/img/produtos/produto-2.png",
            estoque: 10,
        },
        {
            id: 7,
            title: "Biscoito Pit Stop Original Marilan 162g",
            image: "/assets/img/produtos/produto-3.png",
            estoque: 10,
        },
        {
            id: 8,
            title: "Protetor Solar Praia e Piscina FPS 50, Sundown, 350 ML ",
            image: "/assets/img/produtos/produto-4.png",
            estoque: 0,
        },
        {
            id: 9,
            title: "Protetor Solar Praia e Piscina FPS 50, Sundown, 350 ML ",
            image: "/assets/img/produtos/produto-4.png",
            estoque: 0,
        },
    ]


    return (
        <>
            <BreadcrumbsComponent />
            <div className="container">
                <div className="row">
                    <div className="col-3 d-none d-lg-block">

                        <ContentContainer className='banner-distribuidor d-none d-lg-flex '>
                            <img src="/assets/img/distribuidores/logo-distribuidor.png" alt="" />
                        </ContentContainer>

                        <ContentContainer className="filtros" padding="none">
                            <div className="container-header">
                                <h3>Filtros</h3>
                            </div>
                            <FilterGroup title="Categoria" />
                            <FilterGroup title="Embalagem" />
                            <FilterGroup title="Indústria" />
                            <FilterGroup title="Marca" />

                            <FiltroPreco />

                        </ContentContainer>
                    </div>
                    <div className="col-12 col-lg-9">

                        <ContentContainer className={'banner-categorias'} padding="none">
                            <picture>
                                <source srcSet="/assets/img/banner-categorias/banner-categorias-desktop.png" media="(min-width: 640px)" />
                                <img src="/assets/img/banner-categorias/banner-categorias-mobile.png" alt="" />
                            </picture>
                        </ContentContainer>


                        <ContentContainer padding="none">
                            <div className="container-header">
                                <div className="row">
                                    <div className="col-3 d-none d-md-flex d-lg-none">
                                        <div className="logo-distribuidor">
                                            <img src="/assets/img/distribuidores/logo-distribuidor.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-9 col-lg-12">

                                        <h3>Beleza e cuidados pessoais</h3>
                                        <p>Procurando por distribuidores de Cuidados Pessoais e Beleza, conectamos em nossa plataforma os distribuidores homologados pela indústria de bens de consumo, garantindo para o varejo sortimento e credibilidade na entrega. Compre online no atacado com preço de revenda, cadastre-se para ver nossos preços, efetuar seus pedidos e abastecer o estoque do seu mercado, mercearia ou mercadinho com produtos </p>
                                    </div>
                                </div>
                            </div>

                            <div className="filters-and-pagination">

                                <div className="dropdown-wrapper">
                                    <label htmlFor="order-by">Ordenar por:</label>
                                    <Dropdown className="d-inline mx-2" as={Link}>
                                        <Dropdown.Toggle id="dropdown-autoclose-true">
                                            Menor preço
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#">Menor preço</Dropdown.Item>
                                            <Dropdown.Item href="#">Maior preço</Dropdown.Item>
                                            <Dropdown.Item href="#">A - Z</Dropdown.Item>
                                            <Dropdown.Item href="#">Z - A</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>

                                <Pagination count={5} color="primary" className='d-none d-lg-block' />

                                <FiltersMobile />

                            </div>

                            <div className="produtos-container">
                                {
                                    produtos.map((produto) => {
                                        return (
                                            <ProdutoItem key={produto.id} product={produto} />
                                        )
                                    })
                                }



                            </div>

                            <div className="pagination-bottom">
                                <Pagination count={5} variant="outlined" color="primary" />
                            </div>

                        </ContentContainer>


                    </div>
                </div>
            </div>
            <div className="container">
                <NewsLetter />
            </div>
        </>
    )
}

export default Categorias;