import React from 'react';
import Styled from 'styled-components';
// import AboutImg from '../images/'

const about = (props) => {
        return (
            <>
                <AboutWrapper className="about">
                    <div className="about__header">
                        <div className="about__header--over-lay"></div>
                        <div className="about__text-box">
                            <h3>About Us</h3>
                        </div>
                    </div>
                    <div className="container content">
                        <div className="row mb-5">
                            <div className="col-10 col-md-6 col-lg-8">
                                <div className="">
                                    <h2>Our Story</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, distinctio repellat maxime, minima quibusdam magni maiores debitis fugit doloribus pariatur quam doloremque hic porro ipsum quos libero ut, possimus aut nulla. Dolor, qui eaque nihil, temporibus commodi, optio alias enim maiores doloremque aut similique praesentium! Quaerat magni, necessitatibus optio tempora, eius architecto impedit vel consequatur dicta sit aperiam iure ad iusto ducimus earum non in reiciendis debitis dolorum, quidem enim quis. Enim, ratione nemo doloremque quae fuga quasi a at.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, distinctio repellat maxime, minima quibusdam magni maiores debitis fugit doloribus pariatur quam doloremque hic porro ipsum quos libero ut, possimus aut nulla. Dolor, qui eaque nihil, temporibus commodi, optio alias enim maiores doloremque aut similique praesentium! Quaerat magni, necessitatibus optio tempora, eius architecto impedit vel consequatur dicta sit aperiam iure ad iusto ducimus earum non in reiciendis debitis dolorum, quidem enim quis. Enim, ratione nemo doloremque quae fuga quasi a at.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, distinctio repellat maxime, minima quibusdam magni maiores debitis fugit doloribus pariatur quam doloremque hic porro ipsum quos libero ut, possimus aut nulla. Dolor, qui eaque nihil, temporibus commodi, optio alias enim maiores doloremque aut similique praesentium! Quaerat magni, necessitatibus optio tempora, eius architecto impedit vel consequatur dicta sit aperiam iure ad iusto ducimus earum non in reiciendis debitis dolorum, quidem enim quis. Enim, ratione nemo doloremque quae fuga quasi a at.
                                    </p>
                                </div>
                            </div>
                            <div className="col-10 col-md-6 col-lg-4">
                                <div className="img-container">
                                    <div className=""></div>
                                        <img className="img-fluid img-top d-block" src="img/images/about-01.jpg" alt="about-img"/>
                                    </div>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-10 col-md-6 col-lg-4">
                                <div className="img-container">
                                    <div className=""></div>
                                        <img className="img-fluid img-top d-block" src="img/images/about-01.jpg" alt="about-img"/>
                                </div>
                            </div>
                            <div className="col-10 col-md-6 col-lg-8">
                                <div className="">
                                    <h2>Our Mission</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, distinctio repellat maxime, minima quibusdam magni maiores debitis fugit doloribus pariatur quam doloremque hic porro ipsum quos libero ut, possimus aut nulla. Dolor, qui eaque nihil, temporibus commodi, optio alias enim maiores doloremque aut similique praesentium! Quaerat magni, necessitatibus optio tempora, eius architecto impedit vel consequatur dicta sit aperiam iure ad iusto ducimus earum non in reiciendis debitis dolorum, quidem enim quis. Enim, ratione nemo doloremque quae fuga quasi a at.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, distinctio repellat maxime, minima quibusdam magni maiores debitis fugit doloribus pariatur quam doloremque hic porro ipsum quos libero ut, possimus aut nulla. Dolor, qui eaque nihil, temporibus commodi, optio alias enim maiores doloremque aut similique praesentium! Quaerat magni, necessitatibus optio tempora, eius architecto impedit vel consequatur dicta sit aperiam iure ad iusto ducimus earum non in reiciendis debitis dolorum, quidem enim quis. Enim, ratione nemo doloremque quae fuga quasi a at.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, distinctio repellat maxime, minima quibusdam magni maiores debitis fugit doloribus pariatur quam doloremque hic porro ipsum quos libero ut, possimus aut nulla. Dolor, qui eaque nihil, temporibus commodi, optio alias enim maiores doloremque aut similique praesentium! Quaerat magni, necessitatibus optio tempora, eius architecto impedit vel consequatur dicta sit aperiam iure ad iusto ducimus earum non in reiciendis debitis dolorum, quidem enim quis. Enim, ratione nemo doloremque quae fuga quasi a at.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AboutWrapper>
            </>
        );
}

export default about;


const AboutWrapper = Styled.div`
    margin-top: 7.3em;
    p {
        font-size: 20px;
    }
    .about__text-box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        

        h3 {
            font-weight: 500;
            font-size: 5em !important;
        }
    }

    .content {
        margin: 8em auto;
        // border: 3px solid red;
        width: 100%;
        p {
            color: grey;
        }

        .img-container {
            border: .5em solid #7C76B6;
            position: relative;
            height: 345px;

            .img-top {
                position: absolute;
                top: -3em;
                left: 2em;
                transition: all 1s;

                &:hover {
                    transform: scale(1.04);
                }
            }
        }
    }
`;