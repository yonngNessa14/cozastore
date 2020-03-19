import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import SingleProduct from './components/product/SingleProduct';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
// import Modal from './components/Modal';
import HomePage from './pages/HomePage';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* THIS IS ONLY TO LOAD ALL PAGES */}
        <Router>  
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/shop" component={ShopPage}></Route>
            <Route path="/about" component={AboutPage}></Route>
            <Route path="/contact" component={ContactPage}></Route>
            <Route path="/products/:name" component={SingleProduct}></Route>
          </Switch>
          {/* <Modal /> */}
        </Router>
        
      </React.Fragment>
    );
  }
}