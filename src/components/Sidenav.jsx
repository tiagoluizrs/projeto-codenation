import React, {Component} from 'react';
import './Sidenav.css';

import SearchBar from "./SearchBar";
import ProductListSidenav from "./product/ProductListSidenav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import * as SearchActions from "../data/actions/SearchAction";
import {connect} from "react-redux";

class Sidenav extends Component{
    static defaultProps = {
        title: '',
        sideStatus: 'sidenav--hide',
        toggleSideNav: () => {},
        search: () => {},
        products: [],
        productSearch: []
    }

    constructor(props){
        super(props);

        this.state = {
            productsOnCart: 0
        }

        this.totalPrice = this.totalPrice.bind(this);
        this.search = this.search.bind(this);
    }

    toggleSideNav(type){
        const { props } = this;
        props.toggleSideNav(type);
    }

    search(element){
        this.props.dispatch(SearchActions.search(element.value))
    }

    totalPrice(){
        const { props } = this;
        var price = 0;

        for(let product of props.products){
            price += product.price * product.quantity
        }
        return price.toFixed(2).toString().replace(".",",");
    }

    render(){
        const { state, props } = this;
        return(
            <div className={'sidenav ' + props.sideStatus}>
                <section className="sidenav__closeArea" onClick={ this.toggleSideNav.bind(this, 3) } />
                <section className="sidenav__right">
                    <div className="container">
                        <div className="row">
                            <header className="sidenav__header">
                                <button className="sidenav__button" type="button" onClick={ this.toggleSideNav.bind(this, 3) }>
                                    <FontAwesomeIcon icon={faArrowLeft}/>
                                </button>
                                <p className="sidenav__title">
                                    { props.title }
                                    { props.type === 2 ? ` (${props.products.length})` : '' }
                                </p>
                            </header>
                            { props.type === 1 ? <SearchBar search={this.search}/>: '' }

                            { props.type === 1
                                ? <ProductListSidenav type={props.type} products={ props.productSearch }/>
                                : <ProductListSidenav type={props.type} products={ props.products }/>
                            }

                            { props.type === 2 ? <footer className="sidenav__footer">Subtotal - R$ { this.totalPrice() } </footer> : '' }
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    productSearch: state.SearchReducer
})

export default connect(mapStateToProps)(Sidenav);