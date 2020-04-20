import React, {Component} from 'react';
import './ProductPage.css';
import noImage from "../../assets/img/no-image.png";

class ProductPage extends Component{
    static defaultProps = {
        productItem: {},
        addToCart: () => {},
        changeSize: () => {},
    }

    constructor(props){
        super(props);
        this.addToCart = this.addToCart.bind(this);
        this.changeSize = this.changeSize.bind(this);
    }

    changeSize(event){
        this.props.changeSize(event);
    }

    addToCart(){
        this.props.addToCart(this.props.productItem);
    }

    render(){
        const { props } = this;
        if(props.productItem === undefined){
            return(
                <div>Produto não existe</div>
            )
        }
        return(
            <main className="product">
                <div className="row row--flexstart">
                    <div className="container">
                        <div key={props.productItem.id}>
                            <div className="column column__medium--6 column__small--12">
                                <figure className="product__image">
                                    <img src={
                                        props.productItem.image === ""
                                            ? noImage
                                            : props.productItem.image

                                    } alt=""/>
                                </figure>
                            </div>
                            <div className="column flex--column column__medium--6 column__small--12">
                                <h3 className="product__name">{ props.productItem.name }</h3>
                                <p className="product__price">R$ {
                                    props.productItem.price !== undefined ? props.productItem.price.toFixed(2).toString().replace(".",",") : ''
                                } <span className="product__portion">em até 3x R$
                                    {
                                        props.productItem.price !== undefined ? (props.productItem.price / 3).toFixed(2).toString().replace(".",",") : ''
                                    }
                                </span></p>
                                <p className="product__chooseSize">Escolhe seu tamanho</p>
                                <ul className="product__sizes">
                                    {
                                        props.productItem.sizes !== undefined ?
                                            props.productItem.sizes.map((size, i) => {
                                                return (
                                                    <li key={i}>
                                                        <input name="size" type='radio' id={'input_' + size} value={size} onChange={ this.changeSize }/>
                                                        <label htmlFor={'input_' + size}>{size}</label>
                                                    </li>
                                                )
                                            }): ('')
                                    }
                                </ul>
                                <button className="product__button" type="button" onClick={ this.addToCart }>
                                    Adicionar à sacola
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default ProductPage;