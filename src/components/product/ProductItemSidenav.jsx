import React, {Component} from 'react';
import './ProductsSidenav.css';

class ProductItemSidenav extends Component{
    static defaultProps = {
        product: {},
        type: 3
    }

    constructor(props) {
        super(props);
    }

    render(){
        const { props } = this;
        return(
            <div className="product-sidenav__item">
                <figure className="product-sidenav__image">
                    <img src={props.product.image} />
                    <button type="button">Remover item</button>
                </figure>
                <div className="product-sidenav__description">
                    <h5>{ props.product.name }</h5>
                    <p>Tam.: { props.product.size }</p>
                    <div className="product-sidenav__quantity">
                        <button type="button">-</button>
                        <span>1</span>
                        <button type="button">+</button>
                    </div>
                </div>
                <div className="product-sidenav__price">
                    { props.product.price }
                    3x R$ { Math.round(props.product.price / 3, 2)}
                </div>
                { props.type }
            </div>
        )
    }
}

export default ProductItemSidenav;