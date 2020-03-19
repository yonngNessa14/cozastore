import React, { Component } from 'react';
import Product from './Product';
import Styled from 'styled-components';
import { ProductConsumer } from '../../ProductProvider';
import CatSwitch from './CatSwitch';

export default class ProductList extends Component {
    render () {
        return (
            <>
                <Wrapper className="container">
                    <h2 className="title">Preview Products</h2>
                    <CatSwitch />
                    
                    <div className="row">
                        <ProductConsumer>
                            {value => {
                                return value.products.map(product => {
                                    return <Product key={product.id} id={product.id} img={product.img} price={product.price} title={product.title}  />
                                });
                            }}
                        </ProductConsumer>
                    </div>
                </Wrapper>
                <Product />
            </>
        );
    }
}

const Wrapper = Styled.div`   
    .title {
        // font-family: Poppins-Bold;
        font-size: 36px;
        line-height: 1.1;
        text-transform: uppercase;
        // color: #222;
        font-weight: 500;
    }
`;