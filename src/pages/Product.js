import React, {Component} from 'react';
import * as ProductActions from "../data/actions/ProductActions";
import {connect} from "react-redux";
import ProductPage from "../components/product/ProductPage";
import { Channel } from "../data/services/EventEmitter";
import Preloader from "../components/Preloader";
import ReactGA from 'react-ga';

class Product extends Component{
    constructor(props){
        super(props)
        this.addToCart = this.addToCart.bind(this);
        this.changeSize = this.changeSize.bind(this);
        this.initReactAnalytics = this.initReactAnalytics.bind(this);
        this.state = {
            sizes: ""
        }
    }

    componentDidMount() {
        const { match } = this.props;
        this.props.dispatch(ProductActions.item(match.params.id))
        this.initReactAnalytics();
    }


    initReactAnalytics(){
        ReactGA.initialize('UA-164033301-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    changeSize(event){
        const { target } = event;
        let sizes = target.value;
        this.setState({sizes});
    }

    addToCart(item){
        const { state } = this;
        if(state.sizes !== ""){
            let products = JSON.parse(localStorage.getItem('products')),
                newProduct = {
                    id: item.id,
                    image: item.image,
                    name: item.name,
                    price: item.price,
                    quantity: 1,
                    size: state.sizes
                };

            if(products === null || products === undefined){
                localStorage.setItem('products', JSON.stringify([newProduct]))
            }else{
                let index = products.findIndex(product => product.id === item.id && product.size === state.sizes);
                if(index > -1){
                    products[index].quantity++;
                }else{
                    products.push(newProduct)
                }
                localStorage.setItem('products', JSON.stringify(products))
            }

            Channel.emit('verifyCartQtd');
            Channel.emit('pulse');
        }else{
            alert("Selecionar tamanho")
        }
    }

    render(){
        const { props } = this;

        return(
            Object.keys(props.productItem).length === 0 ? <Preloader />:
            <ProductPage
                addToCart={this.addToCart}
                changeSize={this.changeSize}
                productItem={props.productItem}/>
        )
    }
}
const mapStateToProps = state => ({
    productItem: state.ItemReducer
})

export default connect(mapStateToProps)(Product);