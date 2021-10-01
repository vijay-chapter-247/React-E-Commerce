import React, { useState } from 'react';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Products from './components/products/Products'
import Product from './components/product/Product'
import Add from './components/add/Add';
import Profile from './components/profile/Profile';
import Login from './components/login/Login'
import Error from './components/error/Error'
import { Route, Switch } from "react-router-dom";

const App = () => {
  const [show, setShow] = useState(true);
  const toggle = () => {
    setShow(!show);
  }
  return (
    <>
      <Header toggle={show} Toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add" exact render={() => <Add />} />
        <Route path="/profile" exact render={() => <Profile />} />
        <Route path="/products" exact render={() => <Products />} />
        <Route path="/product/:id" exact component={() => <Product />} />
        <Route path="/login" exact component={() => <Login Toggle={toggle} />} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
