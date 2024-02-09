import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import "./banner.scss";


function BannerHome() {
  return (
    <Carousel controls={false} className='banner-slider'>
      <Carousel.Item>
        <a href="/">
          <picture>
            <source srcSet="/assets/img/banners/slide-1.png" media="(min-width: 1020px)" />
            <source srcSet="/assets/img/banners/slide-1-tablet.png" media="(min-width: 420px)" />
            <img src="/assets/img/banners/slide-1-mobile.png" alt="" />
          </picture>
        </a>
      </Carousel.Item>

      <Carousel.Item>
        <a href="/">
          <picture>
            <source srcSet="/assets/img/banners/banner-2-desktop.png" media="(min-width: 1020px)" />
            <source srcSet="/assets/img/banners/banner-2-tablet.png" media="(min-width: 420px)" />
            <img src="/assets/img/banners/banner-2-mobile.png" alt="" />
          </picture>
        </a>
      </Carousel.Item>

      <Carousel.Item>
        <a href="/">
          <picture>
            <source srcSet="/assets/img/banners/slide-2.png" media="(min-width: 1020px)" />
            <source srcSet="/assets/img/banners/slide-2-tablet.png" media="(min-width: 420px)" />
            <img src="/assets/img/banners/slide-2-mobile.png" alt="" />
          </picture>
        </a>
      </Carousel.Item>

      <Carousel.Item>
        <a href="/">
          <picture>
            <source srcSet="/assets/img/banners/banner-2-desktop.png" media="(min-width: 1020px)" />
            <source srcSet="/assets/img/banners/banner-2-tablet.png" media="(min-width: 420px)" />
            <img src="/assets/img/banners/banner-2-mobile.png" alt="" />
          </picture>
        </a>
      </Carousel.Item>

      <Carousel.Item>
        <a href="/">
          <picture>
            <source srcSet="/assets/img/banners/slide-3.png" media="(min-width: 1020px)" />
            <source srcSet="/assets/img/banners/slide-3-tablet.png" media="(min-width: 420px)" />
            <img src="/assets/img/banners/slide-3-mobile.png" alt="" />
          </picture>
        </a>
      </Carousel.Item>
    </Carousel>

  );
}

export default BannerHome;