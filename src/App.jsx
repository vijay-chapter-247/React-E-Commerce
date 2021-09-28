import React from 'react';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Products from './components/products/Products'
import Product from './components/product/Product'
import Login from './components/login/Login'
import Error from './components/error/Error'
import { Route, Switch } from "react-router-dom";
// import axios from 'axios';
// axios.defaults.baseURL = "https://fakestoreapi.com/products"

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact render={() => <Products />} />
        <Route path="/product/:id" exact render={(props) => <Product {...props}/>} />
        <Route path="/login" exact component={Login} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
