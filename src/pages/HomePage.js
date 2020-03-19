import React, { Component } from 'react';
import Header from '../components/Header';
import Category from '../components/Category';
import ProductList from '../components/product/ProductList';

export default class HomePage extends Component {
    render() {
        return (
            <>
                <Header /> 
                <Category />
                <ProductList />
            </>
        );
    }
} 