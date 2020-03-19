import React from 'react';
import styled from 'styled-components';
// import { ProductConsumer } from '../ProductProvider';
// import { ButtonContainer } from './Button';
// import { Link } from 'react-router-dom';


const modal = () => {
        return (            
            <ModalContainer>
                <div className="container">
                    <div className="row container__row">
                        <div id="modal" className="col-8 col-md-6 col-lg-6 text-center text-capitalize p-5">
                            <div className="img-container">
                                <img src="img/images/product-01.jpg" className="img-fluid" alt="modal"/>
                            </div>
                        </div>
                        <div className="col-10 col-md-6 col-lg-6">
                            <div className="aside">
                                <h2 className="aside__title">White Female polo</h2>
                                <div className="item-details">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Totam suscipit officiis rem optio non magnam
                                        nihil quam, quisquam minus accusantium?
                                    </p>
                                    <select className="input-field">
                                        <option>
                                            Select Size
                                        </option>
                                        <option>
                                            40
                                        </option>
                                        <option>
                                            45
                                        </option>
                                        <option>
                                            50
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ModalContainer>
        );
}

export default modal;

const ModalContainer = styled.div `
    z-index: 2000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // padding-bottom: 00px;
    background: rgba(0,0,0,0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    .container__row {
        margin: 100px;
        background: white;
    }
    #modal{
        background: var(--mainWhite);
        width: 100%;
    }
    .container {
        margin-top: 100px;
    }
    .aside {
        // color: black;
        margin-top: 100px;

        .input-field {
            width: 250px;
            height: 50px;
            padding: 10px;
            font-size: 20px;
        }

        .aside__title {
            // font-weight: 500;
        }
    }
`; 