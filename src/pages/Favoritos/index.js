import React, { useState } from 'react';
import BreadcrumbsComponent from "components/Layout/Breadcrumb";
import ContentContainer from "components/Layout/ContentContainer";
import MenuMinhaConta from "components/MenuMinhaConta";
import Form from 'react-bootstrap/Form';
import MenuMinhaContaMobile from "components/MenuMinhaContaMobile";
import NewsLetter from "components/NewsLetter";
import FavoriteItem from "components/FavoriteItem";
import FavoriteItemEmpty from "components/FavoriteItemEmpty";
import CardCustom from "components/CardCustom";
import SidebarMinhaConta from "components/SidebarMinhaConta";
import "../../assets/icomoon-v1.0/style.css";

import "./favoritos.scss"
const Favoritos = () => {

    let favorites = [
        {
            id: 1,
            image: "/assets/img/produtos/produto-1.png",
            title: "Orégano",
            ref: 7891010560737,
            price: 3.34,
            isFavorite: true
        },
        {
            id: 2,
            image: "/assets/img/produtos/produto-2.png",
            title: "Lenço umidecido",
            ref: 7878545466214,
            price: 5.49,
            isFavorite: true
        },
        {
            id: 3,
            image: "/assets/img/produtos/produto-3.png",
            title: "Biscoito Club Social",
            ref: 78598753214566,
            price: 8.49,
            isFavorite: true
        },
        {
            id: 4,
            image: "/assets/img/produtos/produto-4.png",
            title: "Protetor solar",
            ref: 78878545361145,
            price: 7.79,
            isFavorite: true
        },
    ]


    const [favoritesList, setFavoritesList] = useState(favorites);


    function removeItem(itemId) {
        let currentFavorites = [...favoritesList];
        let updatedList = currentFavorites.filter((item) => {
            return item.id != itemId;
        })
        setFavoritesList(updatedList);
    }

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
                                        <h3 className='xl'>Favoritos</h3>
                                        <div className="container-header__actions  mt-2 mt-lg-0">
                                            <div className="inline-select-wrapper">
                                                <label htmlFor="exibir">Mostrar</label>
                                                <span className="d-inline d-lg-none">
                                                    <MenuMinhaContaMobile />
                                                </span>
                                                <Form.Select id="exibir" className='total-itens-exibicao'>
                                                    <option value="10" defaultValue>10</option>
                                                    <option value="50">50</option>
                                                    <option value="100">100</option>
                                                </Form.Select>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div className="container-content">

                                <div className="my-4">
                                    <h3 className="block-title mb-3">Meus produtos favoritos</h3>

                                    {

                                        favoritesList.length > 0 ?

                                            favoritesList.map((item) => {
                                                return (
                                                    <div className='mb-4' key={item.id}>

                                                        <CardCustom
                                                            content={<FavoriteItem item={item} removeItem={removeItem} />}
                                                        />
                                                    </div>
                                                )
                                            }) :
                                            <CardCustom content={<FavoriteItemEmpty />} />


                                    }
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

export default Favoritos;