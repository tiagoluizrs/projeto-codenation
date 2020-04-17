import React, {Component, Suspense} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { connect } from 'react-redux';
import Home from "./pages/Home";
import Product from "./pages/Product";
import TopBar from "./components/TopBar";
import Sidenav from "./components/Sidenav";

export class App extends Component{
  render(){
      return (
          <div className="App">
              <Router>
                  <Link to={'/'} >
                      Home
                  </Link>
                  <Link to={'/product'} >
                      Produto
                  </Link>

                  <TopBar />
                  <Sidenav />
                  <Suspense fallback={<div>Loading...</div>} >
                      <Route path={'/'} exact component={(props) => <Home {...props} />} />
                      <Route path={'/product/:id'} component={(props) => <Product {...props} />} />
                  </Suspense>
              </Router>
          </div>
      );
  }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(App);
