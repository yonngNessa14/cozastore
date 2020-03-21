import React from 'react';
import Styled from 'styled-components';
import { ProductConsumer } from '../../ProductProvider';

const catSwitch = () => {
        return (
            <>
                <ProductConsumer>
                    {(value) => (
                        <Wrapper className="row"> 
                            <ul className="d-flex list-unstyled">
                                <li className="item-list active" onClick={() => { value.handleCat("all");}}>All Products</li>
                                <li className="item-list" onClick={() => { value.handleCat("women");}}>Women</li>
                                <li className="item-list" onClick={() => { value.handleCat("men");}}>Men</li>
                                <li className="item-list" onClick={() => { value.handleCat("accessories");}}>Bags</li>
                                <li className="item-list" onClick={() => { value.handleCat("accessories");}}>Shoes</li>
                                <li className="item-list" onClick={() => { value.handleCat("accessories");}}>Watches</li>
                            </ul>
                        </Wrapper>
                    )}
                </ProductConsumer>
            </>
        );
}

export default catSwitch;

const Wrapper = Styled.div`
    ul {
        margin-top: 40px;
    }
    .item-list {
        padding: 10px;
        font-size: 1.5em;
        color: #5A5A5A;
        cursor: pointer;
        // border: 3px solid black;

        &:not(:last-child) {
            margin-right: 40px;
        }

        &:hover {
            background: #7C76B6;
            color: #ffffff;
        }
    }

`;