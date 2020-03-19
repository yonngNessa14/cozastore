import React from 'react';
import Styled from 'styled-components';
import Product from '../components/product/Product';
import { ProductConsumer } from '../ProductProvider';
import CatSwitch from './product/CatSwitch';

const shop = () => {
        return (
            <>
                <ShopWrapper className="container">
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
                </ShopWrapper>
            </>
        );
}

export default shop;

const ShopWrapper = Styled.div`
    margin-top: 73px;
`;