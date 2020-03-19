// this component 
// will handle all
// my states and methods and deliver
// them to the other
// components without
// using too much props

import React, { Component } from 'react';
import { storeProducts } from './data';
const ProductContext = React.createContext();
//provider
// consumer

class ProductProvider extends Component {
    state = {
        products: storeProducts,
        recipesDetail: []
    }


    handleCat = (category) => {
        if (category === 'all') {
            this.setState(() => {
                return { products: storeProducts };
            });
        }
        else {
            let data = [];
            storeProducts.forEach(product => {
                if (product.category === category) {
                    data = [...data, product];
                }
                
                this.setState(() => {
                    return { products: data };
                });
                
                
            });

        }
    }

    increment = (id) => {
        // console.log(title);
        
        let tempCart = [...this.state.products];
        const selectedProduct = tempCart.find(item => item.id === id);
        // console.log(selectedProduct);
        
        const index = tempCart.indexOf(selectedProduct);
        console.log(index);
        
        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState(() => {
            return { products: tempCart };
        });
    }

    decrement = (id) => {
        let tempCart = [...this.state.products];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count -= 1;

        this.setState(() => {
            return { products: tempCart };
        });
    }
    
    render () {
        return (
            <ProductContext.Provider value={{
                ...this.state,  //copy and deliver the whole state 
                //making all the methods accessible to the other components
                getRecipe: this.getRecipe,
                handleCat: this.handleCat,
                increment: this.increment,
                decrement: this.decrement

            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }




}   
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };