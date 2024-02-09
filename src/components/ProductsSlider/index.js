// Import css files
import React, {useState, useEffect} from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./product-slider.scss"
import Slider from "react-slick";
import Product from "../../components/ProductItem";

// import axios from "axios";


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
         estoque: 10,
    },
    {
        id: 5,
        title: "Kitano Oregano 3g",
        image: "/assets/img/produtos/produto-1.png",
         estoque: 10,
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
         estoque: 10,
    }                     
]

function ProductsSlider () {




    const  settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                }
              },            
            {
              breakpoint: 796,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      
      return (
        <Slider className="product-slider" {...settings}>
            {
                produtos.map((produto) => {
                    return <Product key={produto.id} product={produto} />
                })
            }
        </Slider>
      );
}

export default ProductsSlider ;