import React from 'react';
// import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

const header = () => {
        return (
            <React.Fragment>
                <HeaderCont className="header">
                    
                    <Carousel>
                    <Carousel.Item>
                        <img  data-aos="fade-in" data-aos-duration="3000" className="d-block w-100" src="img/slide-01.jpg" alt="First slide" />
                        <Carousel.Caption className="header__text-box">
                            <div className="header__text-box">
                                <h4 data-aos="fade-right" data-aos-duration="3000" className="header--main">Women collection 2019</h4>
                                <h1 data-aos="fade-right" data-aos-duration="4000" className="header--sub">new season</h1>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <img className="d-block w-100" src="img/slide-02.jpg" alt="Third slide" />
                        <Carousel.Caption className="header__text-box">
                            <div className="header__text-box">
                                <h4  className="header--main">Men New Season</h4>
                                <h1  className="header--sub">Jacket & Coat</h1>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src="img/slide-03.jpg" alt="Third slide" />
                        <Carousel.Caption className="header__text-box">
                            <div className="header__text-box">
                                <h4  className="header--main">Men's Collection 2019</h4>
                                <h1  className="header--sub">New Arivals</h1>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </HeaderCont>
            </React.Fragment>
        );
}

export default header;

const HeaderCont = Styled.header`
    margin-top: 73px;
    position: relative;

    .header__text-box {
       text-transform: uppercase;
       position: absolute;
       left: 5%;
       top: 20%;
    //    border: 3px solid red;
    }
`;