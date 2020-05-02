import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './TopBar.css';
import logo from '../assets/img/logo.png';
import { Channel } from "../data/services/EventEmitter";

class TopBar extends Component{
    static defaultProps = {
        toggleSideNav: () => {}
    }

    constructor(props){
        super(props);
        this.state = {
            productsOnCart: 0,
            pulseClass: ''
        }
        this.verifyCartQtd = this.verifyCartQtd.bind(this);
        this.pulse = this.pulse.bind(this);
    }

    componentDidMount() {
        this.verifyCartQtd();
        Channel.on('verifyCartQtd', this.verifyCartQtd);
        Channel.on('changeQuantity', this.changeQuantity);
        Channel.on('pulse', this.pulse)
    }

    componentWillUnmount() {
        Channel.unsubscribe('verifyCartQtd', this.verifyCartQtd);
        Channel.unsubscribe('changeQuantity', this.changeQuantity);
        Channel.unsubscribe('pulse', this.pulse);
    }

    changeQuantity(product, quantity){
        let products = JSON.parse(localStorage.getItem('products'));
        let index = products.findIndex(item =>  item.sku === product.sku && item.size === product.size);
        products[index].quantity += quantity;
        if(products[index].quantity === 0){
            products.splice(index, 1);
        }
        localStorage.setItem('products', JSON.stringify(products))
    }

    verifyCartQtd(){
        let productsOnCart = JSON.parse(localStorage.getItem('products'));
        if(productsOnCart !== undefined && productsOnCart !== null){
            this.setState({ productsOnCart: productsOnCart.length });
        }
    }

    pulse(){
        this.setState({ pulseClass: 'topbar__badge--pulse'});
        setTimeout(() => {
            this.setState({ pulseClass: '' });
        }, 1000)
    }

    toggleSideNav(type){
        const { props } = this;
        props.toggleSideNav(type);
    }

    render(){
        const { state } = this;
        return(
            <header className="topbar">
                <div className="container">
                    <div className="row">
                        <div className="column column__small--12">
                            <a href="/" className="topbar__logo">
                                <img src={ logo } alt="Logo Fashionista - Topo do site" />
                            </a>
                            <div className="topbar__buttons">
                                <Link to="/">
                                    <FontAwesomeIcon icon={faHome} />
                                </Link>
                                <button type="button" className="topbar__button" onClick={ this.toggleSideNav.bind(this, 1) }>
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                </button>
                                <button type="button" className="topbar__button" onClick={ this.toggleSideNav.bind(this, 2) }>
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                                    {
                                        state.productsOnCart > 0 ? <span className={ "topbar__badge topbar__badge--danger " + state.pulseClass }>{state.productsOnCart}</span> : ''
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default TopBar;