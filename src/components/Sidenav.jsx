import React, {Component} from 'react';
import './Sidenav.css';

import SearchBar from "./SearchBar";
import ProductListSidenav from "./product/ProductListSidenav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

class Sidenav extends Component{
    static defaultProps = {
        title: '',
        sideStatus: 'sidenav--hide',
        toggleSideNav: () => {},
        products: []
    }

    constructor(props){
        super(props);

        this.state = {
            productsOnCart: 0
        }

        this.totalPrice = this.totalPrice.bind(this);
    }

    componentDidMount() {

    }

    toggleSideNav(type){
        const { props } = this;
        props.toggleSideNav(type);
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
                <section className="sidenav__closeArea" onClick={ this.toggleSideNav.bind(this, 3) }></section>
                <section className="sidenav__right">
                    <div className="container">
                        <div className="row">
                            <header className="sidenav__header">
                                <button className="sidenav__button" type="button" onClick={ this.toggleSideNav.bind(this, 3) }>
                                    <FontAwesomeIcon icon={faArrowLeft}/>
                                </button>
                                <p className="sidenav__title">
                                    { props.title }
                                    {
                                        props.type === 2 ? ` (${props.products.length})` : ''
                                    }
                                </p>
                            </header>
                            {
                                props.type === 1 ?
                                <SearchBar />:
                                ''
                            }
                            <ProductListSidenav type={props.type} products={ props.products }/>

                            <footer className="sidenav__footer">
                                Subtotal - R$ { this.totalPrice() }
                            </footer>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Sidenav;