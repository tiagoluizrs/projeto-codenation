import React, {Component} from 'react';
import './ProductsSidenav.css';
import ProductItemSidenav from "./ProductItemSidenav";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearchLocation} from "@fortawesome/free-solid-svg-icons";

class ProductListSidenav extends Component{
    static defaultProps = {
        products: [],
        type: 3
    }

    constructor(props) {
        super(props);
    }

    render(){
        const { props } = this;
        return(
            <section className="product-sidenav">
                {
                    props.products.map(product => <ProductItemSidenav key={product.id + product.size} type={props.type} product={product}/>)
                }
            </section>
        )
    }
}

export default ProductListSidenav;