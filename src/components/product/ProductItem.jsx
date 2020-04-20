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
        const { props } = this;

        return(
            <div className={"mt-2 column column__medium--6 column__large--4 column__small" + props.columns }>
                <div className="product__item">
                    <a href={ '/product/' + props.product.id } className="product__link">
                        <figure className="product__image">
                            {props.product.promotional ? (
                                <span className="product__percent">- {props.product.promotionalPercent}%</span>
                            ) : ('')}
                            <img src={
                                props.product.image === ""
                                ? noImage
                                : props.product.image
                            } alt={ props.product.name }/>

                        </figure>
                    </a>
                    <div className="product__description">
                        <h3 className="product__name">{ props.product.name }</h3>
                        <p className="product__price">
                            R$ { props.product.price }</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductItem;