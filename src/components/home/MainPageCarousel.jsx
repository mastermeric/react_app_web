import React from "react";
import { Carousel } from 'react-bootstrap'
import '../../App.css';
import OtomasyonImage3 from '../../images/automation-system.jpeg'
import BakliyatImage from '../../images/legumes.jpeg'
import ParkeImage from '../../images/parquet-sofa.jpeg'
import KumasImage from '../../images/fabric-rope.jpeg'
import MetaTags from 'react-meta-tags';

const MainPageCarousel = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <meta property="og:image" alt="parquet and sofa" content="public/src/images/parquet-sofa.jpeg" />
        <meta property="og:image" alt="automation" content="public/src/images/automation.jpeg" />
        <meta property="og:image" alt="legumes" content="public/src/images/legumes.jpeg" />
        <meta property="og:image" alt="fabric" content="public/src/images/fabric-rope.jpeg" />
      </MetaTags>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ParkeImage}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={OtomasyonImage3}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={BakliyatImage}
            alt="Third slide"
          />
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src={EtUrunleriImage}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={KomurImage}
            alt="Third slide"
          />
        </Carousel.Item> */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={KumasImage}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </React.Fragment>
  );
};

export default MainPageCarousel;
