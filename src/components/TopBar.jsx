import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import './TopBar.css';
import logo from '../assets/img/logo.png';

class TopBar extends Component{
    static defaultProps = {
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
                                    <span className="topbar__badge topbar__badge--danger">3</span>
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