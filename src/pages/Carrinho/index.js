import React, { useState, useEffect } from 'react';
import BreadcrumbsComponent from "components/Layout/Breadcrumb";
import ContentContainer from "components/Layout/ContentContainer";
import MenuMinhaConta from "components/MenuMinhaConta";
import MenuMinhaContaMobile from "components/MenuMinhaContaMobile";
import NewsLetter from "components/NewsLetter";
import CartItem from "components/CartItem";
import FavoriteItemEmpty from "components/FavoriteItemEmpty";
import MiniCart from "components/MiniCart";
import { Link } from 'react-router-dom';
import CardCustom from "components/CardCustom";
import ProgressBarCustom from "components/ProgressBarCustom";
import SidebarMinhaConta from "components/SidebarMinhaConta";
import "../../assets/icomoon-v1.0/style.css";

import "./carrinho.scss"
const Carrinho = () => {

    let cartItems = [
        {
            id: 12,
            image: "/assets/img/produtos/produto-1.png",
            title: "Orégano tes dadas teste dd tee  asdfadf ço adsf",
            addedItems: "10 unidades",
            regularPrice: "3,34",
            salesPrice: "8,50"
        },
        {
            id: 22,
            image: "/assets/img/produtos/produto-2.png",
            title: "Lenço umidecido",
            addedItems: "8 unidades",
            regularPrice: "5.49",
            salesPrice: "8,50"
        }
    ]


    const [cartItemsList, setCartItems] = useState(cartItems);


    function removeItem(itemId) {
        console.log(itemId)
        let currentCartItems = cartItemsList;
        console.log(currentCartItems);
        let updatedList = currentCartItems.filter((item) => {
            return item.id != itemId;
        })
        console.log(updatedList)
        setCartItems(() => {

        });
        console.log("Depois");
    }

    return (
        <>
            <BreadcrumbsComponent />
            <div className="container cart-page">
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
                                    <div className="col-12 d-lg-flex align-items-center justify-content-between">
                                        <h3 className='xl'>Meu carrinho <sup className="cart-page__total-items">(3 itens)</sup></h3>

                                        <div className="container-header__actions  mt-2 mt-lg-0">
                                            <MiniCart variant={'dark-blue'} />
                                            <span className="d-inline d-lg-none">
                                                <MenuMinhaContaMobile />
                                            </span>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div className="container-content">

                                <div className="mb-5 mt-3">
                                    <div className="cart-page__distributor mb-4">
                                        <h3 className="block-title">Vendido e entregue por:</h3>
                                        <p>Quantum Internacional Distribuidora</p>
                                    </div>
                                    {
                                        cartItems.length > 0 ?
                                            cartItems.map((item) => {
                                                return (
                                                    <div className='mb-4' key={item.id}>

                                                        <CardCustom
                                                            content={<CartItem item={item} removeItem={removeItem} />}
                                                        />
                                                    </div>
                                                )
                                            }) :
                                            <CardCustom content={<FavoriteItemEmpty />} />


                                    }
                                    <div className="cart-page-subtotal">
                                        <p className='cart-page-subtotal__intro'>Faltam R$ 0.000,00 para atingir o pedido mínimo! <Link to="/">Ver produtos</Link>.</p>
                                        <ProgressBarCustom />
                                        <p className='cart-page-subtotal__values'><b>Subtotal</b> <b>R$15,50</b></p>
                                    </div>
                                </div>

                                <div className="mb-5 mt-3">
                                    <div className="cart-page__distributor mb-4">
                                        <h3 className="block-title">Vendido e entregue por:</h3>
                                        <p>Quantum Internacional Distribuidora</p>
                                    </div>
                                    {
                                        cartItems.length > 0 ?
                                            cartItems.map((item) => {
                                                return (
                                                    <div className='mb-4' key={item.id}>

                                                        <CardCustom
                                                            content={<CartItem item={item} removeItem={removeItem} />}
                                                        />
                                                    </div>
                                                )
                                            }) :
                                            <CardCustom content={<FavoriteItemEmpty />} />


                                    }
                                    <div className="cart-page-subtotal">
                                        <p className='cart-page-subtotal__intro'>Faltam R$ 0.000,00 para atingir o pedido mínimo! <Link to="/">Ver produtos</Link>.</p>
                                        <ProgressBarCustom />
                                        <p className='cart-page-subtotal__values'><b>Subtotal</b> <b>R$15,50</b></p>
                                    </div>
                                </div>

                                <div className="cart-page-total__wrapper">
                                    <div className="cart-page-total">
                                        <p className='cart-page-total__values'>
                                            <b>Total</b>
                                            <b>R$ 1.000,00</b>
                                        </p>
                                        <div className="cart-page-total__actions">
                                            <button className='button button-lg button-light-blue'>Finalizar Compra</button>
                                        </div>
                                    </div>
                                    <div className='mb-4 d-flex justify-content-center'>
                                        <button className='button button-lg button-white'>Continuar comprando</button>
                                    </div>

                                </div>


                            </div>
                        </ContentContainer>

                    </div>
                </div>

                <NewsLetter />

            </div >
        </>
    )
}

export default Carrinho;