import React, {Component} from 'react';
import './ProductsSidenav.css';
import ProductItemSidenav from "./ProductItemSidenav";

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
            <section className="products-sidenav">
                {
                    props.products.map(product => <ProductItemSidenav key={product.id + product.size} type={props.type} product={product}/>)
                }
            </section>
        )
    }
}

export default ProductListSidenav;