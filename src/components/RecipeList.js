import React, { Component } from 'react';
import { ProductConsumer } from '../ProductProvider';
import Recipe from './Recipe';

export default class RecipeList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container my-5">
                    <div className="row my-5">
                        <div className="col-10 mx-auto col-md-6">
                            <h1 className="title text-slanted font-italic text-uppercase text-center">
                                recipe list
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <ProductConsumer>
                            {value => {
                                return value.recipes.map(recipe => { 
                                    return <Recipe key={recipe.recipe_id} recipe={recipe} />
                                 });
                            } }
                        </ProductConsumer>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}