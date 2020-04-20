import React, {Component} from 'react';
import './ProductItem.css';
import noImage from "../../assets/img/no-image.png";

class ProductItem extends Component{
    static defaultProps = {
        product: {},
        columns: ''
    }

    constructor(props){
        super(props);
    }

    render(){
        const { props } = this,
                product = props.product;

        return(
            <div className={"mt-2 column column__medium--6 column__large--4 column__small" + props.columns }>
                <div className="product__item">
                    <a href={ '/product/' + product.id } className="product__link">
                        <figure className="product__image">
                            {product.promotional ? (
                                <span className="product__percent">- {product.promotionalPercent}%</span>
                            ) : ('')}
                            <img src={
                                product.image === ""
                                ? noImage
                                : product.image

                            } alt=""/>

                        </figure>
                    </a>
                    <div className="product__description">
                        <h3 className="product__name">{ product.name }</h3>
                        <p className="product__price">
                            R$ { product.price }</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductItem;