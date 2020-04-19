import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
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
        let index = products.findIndex(item =>  item.id === product.id && item.size === product.size);
        products[index].quantity += quantity
        if(products[index].quantity === 0){
            products.splice(index, 1);
        }
        localStorage.setItem('products', JSON.stringify(products))
    }

    verifyCartQtd(){
        let productsOnCart = JSON.parse(localStorage.getItem('products'))
        if(productsOnCart !== undefined && productsOnCart !== null){
            this.setState({ productsOnCart: productsOnCart.length });
        }
    }

    pulse(){
        this.setState({ pulseClass: 'topbar__badge--pulse'});
        setTimeout(() => {
            this.setState({ pulseClass: '' })
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
                                <button type="button" className="topbar__button" onClick={ this.toggleSideNav.bind(this, 1) }>
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                                <button type="button" className="topbar__button" onClick={ this.toggleSideNav.bind(this, 2) }>
                                    <FontAwesomeIcon icon={faShoppingBag} />
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