import React from 'react';
import { ProductConsumer } from '../../ProductProvider';
import { storeProducts } from '../../data';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

const singleProduct = ({ match }) => {
    const name = match.params.name;
    const product = storeProducts.find(product => product.id === name);

    if (!product) {
        return <Wrapper><h1 className="text-center">Product not found</h1></Wrapper>;
    }
    else {
        return (
        <>
            <Wrapper>
                <div className="header-link">
                    <Link to="/"><h5 className="d-inline mr-2">Home</h5></Link> > <h5 className="ml-2 d-inline">{product.title}</h5>
                </div>
                <div className="container product">
                    <div className="row">
                        <div className="col-10 col-md-6 col-lg-6 mx-auto product-container">
                            <img className="product-img img-fluid d-block" src={`../${product.img}`} alt="product"/>
                        </div>
                        <div className="col-10 col-md-6 col-lg-6 mx-auto">
                            <ProductConsumer>
                                {(value) => (
                                    <div>
                                        <h2 className="product-title">{product.title}</h2>
                                        <p className="product-info">{product.info}</p>
                                            <h4 className="product-price">${product.price}</h4>
                                            <div className="sizes">
                                                <input type="radio" name="size" /> <span className="mx-2">small</span>
                                                <input type="radio" name="size" /><span className="mx-2">medium</span>
                                                <input type="radio" name="size" /><span className="mx-2">large</span>
                                                <input type="radio" name="size"  /><span className="mx-2">extra large</span>
                                            </div>
                                            <div className="d-flex">
                                                <div className="quantity-btn">
                                                    <span className="btn btn-blue mx-1" onClick={() => { value.decrement(product.id);}} >-</span>
                                                    <span className="btn btn-black mx-1">{product.count}</span>
                                                    <span className="btn btn-blue mx-1" onClick={() => { value.increment(product.id);}} >+</span>
                                                </div>
                                            </div>
                                            
                                    </div>
                                )}
                            </ProductConsumer>
                            
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    );
    }

    
    
    
}

export default singleProduct;

const Wrapper = Styled.div`
    margin-top: 7.3em;

    .header-link {
        background: #eee;
        padding: 3em;
        margin-top: 9em !important;
    }

    .product {
        margin-top: 9em;
        .product-container {
            max-height: 50em;
            // border: 3px solid red;
            overflow: hidden;
        }
        .product-img {
            max-width: 100%;
            height: 100%;
        }

        .product-title {
            font-weight: bold;
            text-transform: capitalize;
        }
        .product-info {
            margin: 3em 0;
            font-size: 1.5em;
        }

        .product-price {
            color: #7C76B6;
        }

        .sizes {
            margin-top: 3em;
        }

        .quantity-btn {
            // border: 3px solid red; 
            margin-top: 3em;
        }
        .btn-black{
            background: transparent;
            text-transform: capitalize;
            font-size: 0.8rem !important;
            color: #232528;
            border-radius: 0 !important;
            border: 0.2em solid #232528 !important;

            &:hover {
            background: #232528;
            color: #f3f3f3;
            }
        }

        .btn-blue{
            background: transparent;
            text-transform: capitalize;
            font-size: 0.8rem !important;
            color: #232528;
            border-radius: 0 !important;
            border: 0.2rem solid #7C76B6 !important;

            &:hover {
            background: #232528;
            color: #f3f3f3;
            }
        }

           
    }
`;