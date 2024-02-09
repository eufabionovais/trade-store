import React from "react";
import Logo from "../../../assets/img/logo-acelera-pdv.svg";
import IconWhatsapp from "../../../assets/img/icons/icon-whatsapp.svg";
import IconShipping from "../../../assets/img/icons/icon-shipping.svg";
import MiniCart from "../../MiniCart";
import IconHeart from "../../../assets/img/icons/icon-heart.svg";
import Greeting from "../../Greeting"
import MainNav from "../MainNav"
import MainNavMobile from "../MainNavMobile"
import OffCanvasCart from "../../OffCanvasCart";
import "./header.scoped.scss";
const Header = () => {

    return (
        <>
            <header className="main-header">

                <div className="top-line">
                    <div className="container">
                        <div className="row gx-3">
                            <div className="col justify-content-center  justify-content-xl-end d-flex align-items-center">
                                <p>Faça seus pedidos também pelo WhatsApp:</p>
                                <p> <img className="icon" src={IconWhatsapp} alt="" /> <a href="tel:+5511950659221">+55 11 950659221</a></p>
                                <p className="ship-message"><img className="icon" src={IconShipping} alt="" />Frete Grátis por vendedor a partir de R$150,00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-header-content">
                    <div className="container main-header-content-inner">
                        <div className="toggle-menu">
                            <MainNavMobile />
                        </div>
                        <div className="logo">
                            <a href="/">
                                <img src={Logo} alt="Acelera PDV" />
                            </a>
                        </div>
                        <div className="search-container">
                            <input type="text" placeholder="Estou buscando por..." className="form-control search-form-control" />
                        </div>

                        <Greeting isLoggedIn={false} />

                        <div className="notifications ml-auto d-flex">

                            <MiniCart variant="white" />

                            <OffCanvasCart />

                            <div className="favorites">
                                <div className="icon">
                                    <a href="/"><img src={IconHeart} alt="" /></a>
                                    <span className="counter">15</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </header>
            <MainNav />



        </>
    )
}

export default Header;