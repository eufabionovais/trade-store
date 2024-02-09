import { Link, NavLink } from "react-router-dom"

import LogoZicard from "../../../assets/img/logo-zicard.svg";
import IconRefresh from "../../../assets/img/icons/icon-refresh.svg";
import IconThumbUp from "../../../assets/img/icons/icon-thumb-up.svg";
import IconCheckRounded from "../../../assets/img/icons/icon-check-rounded.svg";
import IconTruck from "../../../assets/img/icons/icon-truck.svg";
import LogoAcelera from "../../../assets/img/icons/logo-acelera-pdv-color.png";
import IconBoleto from "../../../assets/img/icons/icon-boleto.png";
import IconSiteSeguro from "../../../assets/img/icons/icon-site-seguro.png";
import IconGoogleSiteSeguro from "../../../assets/img/icons/icon-google-site-seguro.png";
import IconFacebook from "assets/img/social/icon-facebook.svg";
import IconInstragram from "assets/img/social/icon-instagram.svg";
import IconWhatsapp from "assets/img/social/icon-whatsapp.svg";

import "./footer.scoped.scss";

const Footer = () => {
    return (
        <>
            <footer className="main-footer">
                <div className="container">
                    <div className="row benefits">
                        <div className="mb-3 col-6 col-lg-3 mb-lg-0">
                            <div className="media">
                                <img className="mb-3 icon" src={IconRefresh} alt="" />
                                <div className="media-body">
                                    <h5 className="mt-0 mb-1">Repetir pedido</h5>
                                    <p>Saiba mais</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3 col-6 col-lg-3 mb-lg-0">
                            <div className="media">
                                <img className="mb-3 icon" src={IconThumbUp} alt="" />
                                <div className="media-body">
                                    <h5 className="mt-0 mb-1">Distribuidores Oficiais das Indústrias</h5>
                                    <p>Exclusivos e homologados</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3 col-6 col-lg-3 mb-lg-0">
                            <div className="media">
                                <img className="mb-3 icon" src={IconCheckRounded} alt="" />
                                <div className="media-body">
                                    <h5 className="mt-0 mb-1">Credibilidade na Entregas</h5>
                                    <p>Os melhores parceiros</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3 col-6 col-lg-3 mb-lg-0">
                            <div className="media">
                                <img className="mb-3 icon" src={IconTruck} alt="" />
                                <div className="media-body">
                                    <h5 className="mt-0 mb-1">Entrega Rápida</h5>
                                    <p>Agilidade e segurança </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row sitemap">
                        <div className="col-12 col-lg-3">
                            <div className="contact">
                                <img src={LogoAcelera} alt="" />
                                <div className="content">
                                    <p>Acelera PDV | Av. Interlagos, 3665<br /> Sala 5A - Interlagos</p>
                                    <p>São Paulo - SP CEP: 04661-300</p>
                                </div>
                                <div className="social">
                                    <a href="#">
                                        <img src={IconFacebook} alt="" />
                                    </a>
                                    <a href="#">
                                        <img src={IconInstragram} alt="" />
                                    </a>
                                    <a href="#">
                                        <img src={IconWhatsapp} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 col-lg-3 hide-mobile">
                            <ul className="list">
                                <li><h5>Institucional</h5></li>
                                <li>
                                    <NavLink to="/sobre-nos">Sobre nós</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/fale-conosco">Contato</NavLink>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                <li>
                                    <a href="#">FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-4 col-lg-3 hide-mobile">
                            <ul className="list">
                                <li><h5>Institucional</h5></li>
                                <li>
                                    <NavLink to="/termos-condicoes-vendedor">Termos e Condições do Vendedor</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/termos-condicoes-vendedor">Termos e Condições do Comprador</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/politica-privacidade-seguranca">Política de Privacidade e Segurança</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/politica-privacidade-seguranca">Política de Trocas e Devoluções</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col-4 col-lg-3 hide-mobile">
                            <ul className="list">
                                <li><h5>Pagamento</h5>
                                    <img src={IconBoleto} alt="" />
                                </li>
                            </ul>

                            <ul className="list">
                                <li><h5>Segurança</h5>
                                    <img src={IconSiteSeguro} alt="" />
                                    <img src={IconGoogleSiteSeguro} alt="" />
                                </li>
                            </ul>


                        </div>

                    </div>
                </div>
            </footer>
            <div className="credits">
                <div className="container d-flex align-items-end justify-content-center">
                    <span className="mr-3 d-block">Desenvolvido por</span>
                    <img src={LogoZicard} alt="Zicard" className="logo" />
                </div>
            </div>
        </>
    )
}

export default Footer;