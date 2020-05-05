import React, {Component} from 'react';
import './ProductsSidenav.css';
import ProductItemSidenav from "./ProductItemSidenav";

class ProductListSidenav extends Component{
    static defaultProps = {
        products: [],
        type: 3
    }

    render(){
        const { props } = this;
        return(
            <section className="product-sidenav">
                {
                    props.type === 1 ? <span className="product-sidenav__total-items">{props.products.length + ' items'}</span> : ''
                }
                {
                    props.products.map((product, i) => <ProductItemSidenav key={i} type={props.type} product={product}/>)
                }
            </section>
        )
    }
}

export default ProductListSidenav;