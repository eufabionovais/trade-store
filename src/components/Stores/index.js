import "./stores.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";


const Stores = () => {

    const lojas = [
        {id: 1, name: "Quantum", image: '/assets/img/lojas/quantum-distribuidora.png'},
        {id: 2, name: "Univale", image: '/assets/img/lojas/univale.png'},
        {id: 3, name: "Scapol", image: '/assets/img/lojas/scapol.png'},
        {id: 4, name: "MidWest", image: '/assets/img/lojas/midwest-distribuidora.png'},
        {id: 5, name: "Griffus", image: '/assets/img/lojas/griffus-cosmeticos.png'},
        {id: 6, name: "NovaMix", image: '/assets/img/lojas/novamix-distribuidora.png'},

        {id: 7, name: "Quantum", image: '/assets/img/lojas/quantum-distribuidora.png'},
        {id: 8, name: "Univale", image: '/assets/img/lojas/univale.png'},
        {id: 9, name: "Scapol", image: '/assets/img/lojas/scapol.png'},
        {id: 10, name: "MidWest", image: '/assets/img/lojas/midwest-distribuidora.png'},
        {id: 11, name: "Griffus", image: '/assets/img/lojas/griffus-cosmeticos.png'},
        {id: 12, name: "NovaMix", image: '/assets/img/lojas/novamix-distribuidora.png'},

    ]


    const  settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                }
              },            
            {
              breakpoint: 796,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
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


    <Slider className="stores-slider" {...settings}>
        {
            lojas.map((loja) => {
                return (
                    <div className="item" key={loja.id}>
                        <div className="image">
                            <img src={loja.image} alt={loja.name} />
                        </div>
                        <p>{loja.name}</p>
                    </div>
                )
            })
        }
    </Slider>


        
    )
}

export default Stores;