import React from 'react';
import Styled from 'styled-components';
import { ProductConsumer } from '../ProductProvider';

const category = () => {
        return (
            <React.Fragment>
                <ProductConsumer>
                    {(value) => (
                        <CartContainer className="container">
                            <div className="row">
                                <div className="col-10 col-md-6 col-lg-4 mx-auto cart-content" onClick={(women) => { value.handleCat(); }}>
                                    <div className="over-lay"></div>
                                    <div className="cart-women cart-1 cart p-3">
                                        <h2>Women</h2>
                                        <p>Spring 2019</p>
                                    </div>
                                </div>

                                <div className="col-10 col-md-6 col-lg-4 mx-auto cart-content">
                                    <div className="over-lay"></div>
                                    <div className="cart-men cart-2 cart p-3">
                                        <h2>Men</h2>
                                        <p>Spring 2019</p>
                                    </div>
                                </div>

                                <div className="col-10 col-md-6 col-lg-4 mx-auto cart-content">
                                    <div className="over-lay"></div>
                                    <div className="cart-access cart-3 cart p-3">
                                        <h2>Accessories</h2>
                                        <p> New Trend</p>
                                    </div>
                                    
                                </div>
                            </div>
                </CartContainer>
                    )}
                </ProductConsumer>
                
            </React.Fragment>
        );
}

export default category;

const CartContainer = Styled.div`
    margin: 70px auto;
    // border: 3px solid red;
    padding: 0;


    .cart {
        // padding: 20px;
        width: 100%;
        height: 300px;
        border: 1px solid #D6DBDE;

        // &:hover {
        //     background: #7C76B6;
        // }
    }

    p {
        color: #5A5A5A; 
        font-weight: 500 !important;
    }
`;