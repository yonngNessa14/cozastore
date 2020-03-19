import React, { Component } from 'react';
import Styled from 'styled-components';
import SingleProduct from '../components/product/SingleProduct';

export default class ProductPage extends Component {
    render () {
        return (
            <>
                <Wrapper>
                    <SingleProduct />
                </Wrapper>
                
            </>
        );
    }
}

const Wrapper = Styled.div``;