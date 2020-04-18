import React, {Component} from 'react';
import './ProductsSidenav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import {Channel} from "../../data/services/EventEmitter";

class ProductItemSidenav extends Component{
    static defaultProps = {
        product: {},
        type: 3
    }

    constructor(props) {
        super(props);
    }

    changeQuantity(quantity){
        const { props } = this;
        Channel.emit('changeQuantity', props.product, quantity);
        Channel.emit('updateState');
        Channel.emit('verifyCartQtd');
    }

    render(){
        const { props } = this;
        return(
            <div className="product-sidenav__item">
                <figure className="product-sidenav__image">
                    <img src={props.product.image} />
                    {
                        props.type === 2 ? <button onClick={this.changeQuantity.bind(this, -props.product.quantity)} type="button">Remover item</button> : ''
                    }
                </figure>
                <div className="product-sidenav__description">
                    <h5>{ props.product.name.toUpperCase() }</h5>
                    <p>Tam.: { props.product.size }</p>
                    {
                        props.type === 2 ?
                        <div className="product-sidenav__quantity">
                            <button type="button" onClick={this.changeQuantity.bind(this, -1)}><FontAwesomeIcon icon={faMinus}/></button>
                            <span>{ props.product.quantity }</span>
                            <button type="button" onClick={this.changeQuantity.bind(this, 1)}><FontAwesomeIcon icon={faPlus}/></button>
                        </div>
                        : ''
                    }
                </div>
                <div className="product-sidenav__price">
                    <p>R$ { props.product.price.toFixed(2).toString().replace(".", ",") }</p>
                    <p>3x R$ { (props.product.price / 3).toFixed(2).toString().replace(".", ",")}</p>
                </div>
                {/*{  }*/}
            </div>
        )
    }
}

export default ProductItemSidenav;