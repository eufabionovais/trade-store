import React, { useState } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./product-details-slider.scss"

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

export default function SyncSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  let [isFavorite, setFavorite] = useState(false);



    return (
    <div className='products-details-slider-wrapper'>
          <button className="favorite" onClick={() => setFavorite(isFavorite = !isFavorite)}>
            {
              isFavorite ? <Favorite className='icon' /> : <FavoriteBorderIcon className='icon' />
            }          
            
          </button>
      <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} className="product-details-slider">

        <div className="slide">
        
            <img src="/assets/img/produtos-detalhes/cotonetes-1.png" alt="" />
        
        </div>
        <div className="slide">
        
            <img src="/assets/img/produtos-detalhes/cotonetes-2.png" alt="" />
        
        </div>
        <div className="slide">
        
            <img src="/assets/img/produtos-detalhes/cotonetes-3.png" alt="" />
        
        </div>
        <div className="slide">
        
            <img src="/assets/img/produtos-detalhes/cotonetes-4.png" alt="" />
        
        </div>
        <div className="slide">
        
            <img src="/assets/img/produtos-detalhes/cotonetes-1.png" alt="" />
        
        </div>
        <div className="slide">
        
            <img src="/assets/img/produtos-detalhes/cotonetes-2.png" alt="" />
        
        </div>
      </Slider>

      <Slider
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={4}
        swipeToSlide={true}
        focusOnSelect={true}
        className="product-details-thumbs"
      >
        <div className="slide">            
            <img src="/assets/img/produtos-detalhes/cotonetes-1.png" alt="" />            
        </div>
        <div className="slide">            
            <img src="/assets/img/produtos-detalhes/cotonetes-2.png" alt="" />            
        </div>
        <div className="slide">
        <img src="/assets/img/produtos-detalhes/cotonetes-3.png" alt="" />            
        </div>
        <div className="slide">
        <img src="/assets/img/produtos-detalhes/cotonetes-4.png" alt="" />            
        </div>
        <div className="slide">
        <img src="/assets/img/produtos-detalhes/cotonetes-1.png" alt="" />            
        </div>
        <div className="slide">
        <img src="/assets/img/produtos-detalhes/cotonetes-2.png" alt="" />            
        </div>
      </Slider>
    </div>
  );
}