import React, {Component} from 'react';
import './Sidenav.css';

import SearchBar from "./SearchBar";
import ProductSidenav from "./product/ProductSidenav";
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
    }

    toggleSideNav(type){
        const { props } = this;
        props.toggleSideNav(type);
    }

    render(){
        const { props } = this;
        return(
            <section className={ "sidenav " + props.sideStatus }>
                <div className="container">
                    <div className="row">
                        <header>
                            <button type="button" onClick={ this.toggleSideNav.bind(this, 3) }>
                                <FontAwesomeIcon icon={faArrowLeft}/>
                                { props.title }
                            </button>
                        </header>
                        <SearchBar />
                        <ProductSidenav />
                    </div>
                </div>
            </section>
        )
    }
}

export default Sidenav;