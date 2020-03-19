import React from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

const product = (props) => {
        return (
            <React.Fragment>
                <ContWrapper data-aos="slide-up" data-aos-duration="1000" className="col-10 col-md-4 col-lg-3 img-container">
                    <Link to={`/products/${props.id}`}>
                        <div className="card">
                            <img className="card-img-top product-img" src={props.img} alt="test" />
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <h5>{props.title}</h5>
                                </div>
                                <p>{props.price}</p>
                            </div>
                        </div>
                    </Link>
                </ContWrapper>
                    {/* <div className="row">
                        <div className="col-1 col-md-1 col-lg-1 mx-auto">
                            <button className="text-center">Show more</button>
                        </div>
                    </div> */}
            </React.Fragment>
        );
}

export default product;

const ContWrapper = Styled.div`
    ul {
        margin-top: 40px;
    }
    .item-list {
        padding-bottom: 10px;
        font-size: 1.5em;
        color: #5A5A5A;

        &:not(:last-child) {
            margin-right: 40px;
        }
    }

    .card {
        margin-bottom: 10px;
    }
`;