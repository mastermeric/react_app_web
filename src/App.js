import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import { BrowserRouter as HashRouter, Route, Switch } from 'react-router-dom';
import Footer from "./components/home/Footer";
import HomeIndex from "./components/home/HomeIndex";
import AboutIndex from "./components/about/AboutIndex";
import ContactIndex from "./components/contact/ContactIndex";
import NavbarHeader from "./components/home/NavbarHeader";
import ProductIndex from "./components/products/ProductIndex";
import NotFound from "./components/home/NotFound";
import { createBrowserHistory } from "history";
import { Helmet } from 'react-helmet';


const customHistory = createBrowserHistory();

function App() {  
  return (
    <React.Fragment>
      <Helmet>
        <title>App Title</title>
        <meta name="description" content="App Description" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <Router basename="/trade-ist.com">
        <NavbarHeader></NavbarHeader>
        <Switch>
          <Route exact path="/" component={HomeIndex} />
          <Route path="/why-us" component={AboutIndex} />
          <Route path="/product" component={ProductIndex} />
          <Route path="/contact" component={ContactIndex} />
          <Route component={NotFound} />
        </Switch>
        <Footer></Footer>
      </Router>
    </React.Fragment>
  );
}

export default App;

<Router></Router>;
