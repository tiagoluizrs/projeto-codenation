import React, {Component, Suspense} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { connect } from 'react-redux';
import Home from "./pages/Home";
import Product from "./pages/Product";
import TopBar from "./components/TopBar";
import Sidenav from "./components/Sidenav";

import * as ProductActions from './data/actions/ProductActions';
import {Channel} from "./data/services/EventEmitter";

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
        this.updateState = this.updateState.bind(this);
        this.search = this.search.bind(this);
    }

    componentDidMount(){
        this.props.dispatch(ProductActions.list());
        Channel.on('updateState', this.updateState);
    }

    componentWillUnmount() {
        Channel.unsubscribe('updateState', this.updateState);
    }

    toggleSideNav(type){
        var data = {},
            products = JSON.parse(localStorage.getItem('products'));

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
                products: products === null || products === undefined ? [] : products,
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

    updateState(){
        let products = JSON.parse(localStorage.getItem('products'));
        this.setState({products});
    }

    search(element){
        const products = JSON.parse(localStorage.getItem('products'));

        this.setState({
            products: products === null || products === undefined ? [] : products
        });
    }

    render(){
        const { state } = this;
        return (
            <div className="App">
                <Router>
                    <TopBar toggleSideNav={ this.toggleSideNav }/>
                    <Sidenav search={this.search} products={ state.products } type={state.type} title={state.title} sideStatus={state.sideStatus} toggleSideNav={ this.toggleSideNav }/>
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
