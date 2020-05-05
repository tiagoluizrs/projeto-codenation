import React, {Component} from 'react';
import * as ProductActions from "../data/actions/ProductActions";
import {connect} from "react-redux";
import ProductPage from "../components/product/ProductPage";
import { Channel } from "../data/services/EventEmitter";
import Preloader from "../components/Preloader";
import ReactGA from 'react-ga';
import {Helmet} from 'react-helmet'

class Product extends Component{
    constructor(props){
        super(props)
        this.addToCart = this.addToCart.bind(this);
        this.changeSize = this.changeSize.bind(this);
        this.initReactAnalytics = this.initReactAnalytics.bind(this);
        this.state = {
            sizes: "",
            sku: "",
            msg: {
                status: false,
                text: null,
                type: null
            }
        }
    }

    componentDidMount() {
        const { match } = this.props;
        this.props.dispatch(ProductActions.item(match.params.name));
        this.initReactAnalytics();
    }


    initReactAnalytics(){
        ReactGA.initialize('UA-164033301-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    changeSize(event){
        const { target } = event;
        let sizes = target.value.split("+");
        this.setState({
            sizes: sizes[0],
            sku: sizes[1]
        });
    }

    addToCart(item){
        const { state } = this;
        if(state.sizes !== ""){
            let products = JSON.parse(localStorage.getItem('products')),
                newProduct = {
                    image: item.image,
                    name: item.name,
                    price: item.on_sale ? item.actual_price : item.regular_price,
                    on_sale: item.on_sale,
                    actual_price: item.actual_price,
                    regular_price: item.regular_price,
                    installments: item.installments,
                    quantity: 1,
                    size: state.sizes,
                    sku: state.sku,
                };

            if(products === null || products === undefined){
                localStorage.setItem('products', JSON.stringify([newProduct]))
            }else{
                let index = products.findIndex(product => (product.sku === state.sku) && (product.size === state.sizes) && (product.name === item.name));
                if(index > -1){
                    products[index].quantity++;
                }else{
                    products.push(newProduct)
                }
                localStorage.setItem('products', JSON.stringify(products))
            }

            Channel.emit('verifyCartQtd');
            Channel.emit('pulse');
            this.setState({
                msg: {
                    status: false,
                    text: null,
                    type: null
                }
            })
        }else{
            this.setState({
                msg: {
                    status: true,
                    text: 'É necessário escolher um tamanho',
                    type: 'error'
                }
            })
        }
    }

    render(){
        const { props } = this;

        return(
                Object.keys(props.productItem).length === 0 ? <Preloader />:
                <div>
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>Fashionista - {props.productItem.name}</title>
                        <meta name="robots" content="follow, index"/>
                        <meta name="description" content="Loja virtual de teste para demonstrar os recursos do ReactJS."/>
                        <meta property="og:locale" content="pt_BR"/>
                        <meta property="og:url" content={window.location.pathname + window.location.search}/>
                        <meta property="og:title" content={"Fashionista - " + props.productItem.name}/>
                        <meta property="og:site_name" content="Fashionista"/>
                        <meta property="og:description" content="Loja virtual de teste para demonstrar os recursos do ReactJS."/>
                        <meta property="og:image" content={props.productItem.image} />
                        <meta property="og:image:type" content="image/jpeg"/>
                        <meta property="og:image:width" content="330"/>
                        <meta property="og:image:height" content="420"/>
                        <meta property="og:type" content="website"/>
                    </Helmet>
                    <ProductPage
                        addToCart={this.addToCart}
                        changeSize={this.changeSize}
                        msg={this.state.msg}
                        productItem={props.productItem}/>
                </div>
        )
    }
}
const mapStateToProps = state => ({
    productItem: state.ItemReducer
})

export default connect(mapStateToProps)(Product);