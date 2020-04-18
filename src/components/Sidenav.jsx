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
        toggleSideNav: () => {}
    }

    constructor(props){
        super(props);

        this.state = {
            productsOnCart: 0
        }

        this.verifyCartQtd = this.verifyCartQtd.bind(this);
    }

    verifyCartQtd(){
        let productsOnCart = JSON.parse(localStorage.getItem('products'))
        if(productsOnCart !== undefined && productsOnCart !== null){
            this.setState({productsOnCart: productsOnCart.length});
        }
    }

    componentDidMount() {
        this.verifyCartQtd();
    }

    toggleSideNav(type){
        const { props } = this;
        props.toggleSideNav(type);
    }

    render(){
        const { state, props } = this;
        return(
            <div className={'sidenav ' + props.sideStatus}>
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
                                        props.type === 2 ? ` (${state.productsOnCart})` : ''
                                    }
                                </p>
                            </header>
                            {
                                props.type === 1 ?
                                <SearchBar />:
                                ''
                            }
                            <ProductListSidenav type={props.type} products={ props.products }/>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Sidenav;