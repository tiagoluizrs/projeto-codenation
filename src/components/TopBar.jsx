import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import './TopBar.css';
import logo from '../assets/img/logo.png';

class TopBar extends Component{
    render(){
        return(
            <header className="topbar">
                <div className="container">
                    <div className="row">
                        <a href="/" className="topbar__logo">
                            <img src={ logo } alt="Logo Fashionista - Topo do site" />
                        </a>

                        <div className="topbar__buttons">
                            <button type="button" className="topbar__button">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                            <button type="button" className="topbar__button">
                                <FontAwesomeIcon icon={faShoppingBag} />
                                <span className="topbar__badge topbar__badge--danger">3</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default TopBar;