import React from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

const product = (props) => {
        return (
            <ContWrapper data-aos="slide-up" data-aos-duration="1000" className="col-10 col-md-4 col-lg-3">
                
                <div className="card">
                    <div className="img-container">
                        <Link to={`/products/${props.id}`}>
                            <img className="card-img-top product-img" src={props.img} alt="test" />
                        </Link>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        {/* <h5>{props.title}</h5> */}
                        <h5 className='text-capitalize title'>this is the title</h5>
                    </div>
                </div>
               
            </ContWrapper>
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

        .title {
            text-decoration: none !important;
            color: #000 !important;
        }

        &:hover{
            .card{
                border: 0.1rem solid rgba(0,0,0,0.2);
                box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
            }
            .card-footer{
                background: #7B7A76
            }
        }

        .img-container {
            position: relative;
            overflow: hidden;
        }

        .img-container:hover .product-img {
            transform: scale(1.1);
        }

        .product-img {
            transition: all .5s linear
        }
    }
`;