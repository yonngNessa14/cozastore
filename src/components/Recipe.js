import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../ProductProvider';

export default class Recipe extends Component {
    render() {
        const { recipe_id, image_url, title, publisher, source_url } = this.props.recipe;
        return (
            <React.Fragment>
                <div className="col-10 col-md-6 col-lg-3 mx-auto" >
                    <div className="card">
                        <ProductConsumer>
                            {(value) => (
                                <>
                                    <div className="img-container p-4" onClick={() => { value.getRecipe(recipe_id); }}>
                                        <Link to="/details">
                                            <img src={image_url} alt="recipe" className="card-img-top w-100" />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <h1 className="font-italic text-capitalize">{title}</h1>
                                    </div>
                                </>
                            )}
                        </ProductConsumer>
                        
                        <div className="card-footer d-flex justify-content-between">
                            <a href={source_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Url</a>
                            <a href={source_url} className="btn btn-warning">View Url</a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}