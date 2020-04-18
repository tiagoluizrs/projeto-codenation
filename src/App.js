import React, {Component, Suspense} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { connect } from 'react-redux';
import Home from "./pages/Home";
import Product from "./pages/Product";
import TopBar from "./components/TopBar";
import Sidenav from "./components/Sidenav";

import * as ProductActions from './data/actions/ProductActions';

export class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            title: '',
            sideStatus: 'sidenav--hide',
            type: 3,
            products: []
        }
        this.toggleSideNav = this.toggleSideNav.bind(this);
    }

    componentDidMount(){
        this.props.dispatch(ProductActions.list());
    }

    toggleSideNav(type){
        var data = {}
        switch (type) {
            case 1:
            data = {
                'title': 'Buscar Produtos',
                'sideStatus': '',
                type,
                products: []
            }
            break;

            case 2:
            data = {
                'title': 'Sacola',
                'sideStatus': '',
                type,
                products: JSON.parse(localStorage.getItem('products')),
            }
            break;

            case 3:
            data = {
                'title': '',
                'sideStatus': 'sidenav--hide',
                type,
                products: []
            }
            break;
        }
        this.setState(data);
    }

    render(){
        const { state } = this;
        return (
            <div className="App">
                <Router>
                    <TopBar toggleSideNav={ this.toggleSideNav }/>
                    <Sidenav products={ state.products } type={state.type} title={state.title} sideStatus={state.sideStatus} toggleSideNav={ this.toggleSideNav }/>
                    <Suspense fallback={<div>Carregando...</div>} >
                        <Route path={'/'} exact component={Home} />
                        <Route path={'/product/:id'} component={Product} />
                    </Suspense>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    productList: state.ProductReducer
})


export default connect(mapStateToProps)(App);
