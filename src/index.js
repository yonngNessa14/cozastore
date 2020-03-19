import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductProvider } from './ProductProvider';
import {BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

AOS.init();

ReactDOM.render(
    <ProductProvider>
        <Router>
            <App />
        </Router>
    </ProductProvider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
