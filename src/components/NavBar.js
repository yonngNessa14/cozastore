import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
// import './NavBar.css';

const navBar = () => {
        return (
            <React.Fragment>
                <NavWrapper className="navbar navbar-expand-sm bg-dark navbar-dark px-sm-5 fixed-top">
                    <div className="container">
                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link to="/">
                            <h1 className="navbar-brand align-items-center">
                                <span className="brand--main">Coza </span> <span className="brand--sub">Store</span>
                            </h1>
                        </Link>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav">
                                <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                                <li className="nav-item"><Link to="/shop" className="nav-link">Shop</Link></li>
                                <li className="nav-item"><Link to="/features" className="nav-link">Features</Link></li>
                                <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
                                <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                                <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                
                </NavWrapper>
            </React.Fragment>
        );
}

export default navBar;

const NavWrapper = Styled.nav`
    font-size: 1.4em; //18px
    h1 {
        font-size: 1.333333333333333em; //24px

        .brand--main {
            color: rgba(195, 21, 21, 0.815);
            font-size: 1.5em; //36px
        }

        .brand--sub {
            // color: rgba(195, 21, 21, 0.815);
            font-size: 1em;
        }
    }

    .navbar-collapse {
        // border: 3px solid red;
        margin-left: 30px;
    }

    .nav-link {
        color: #fff !important;
        font-weight: 500;
        letter-spacing: 1px;
        font-family: Poppins-Medium;
        background-color: transparent;

        &:hover {
            color: #7C76B6 !important;
        }
        &:focus {
            color: #7C76B6 !important;
        }
    }
`;