import React, {Component} from "react";
import ProductsList from "../components/product/ProductsList";
import * as ProductActions from "../data/actions/ProductActions";
import {connect} from "react-redux";
import Preloader from "../components/Preloader";
import ReactGA from 'react-ga';
import {Helmet} from 'react-helmet'

class Home extends Component{
    static defaultProps = {
        productList: null,
    }

    constructor(props){
        super(props);
        this.initReactAnalytics = this.initReactAnalytics.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(ProductActions.list());
        this.initReactAnalytics();
    }


    initReactAnalytics(){
        ReactGA.initialize('UA-164033301-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    render(){
        const { props } = this;
        return(
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Fashionista - Home</title>
                    <meta name="robots" content="follow, index"/>
                    <meta name="description" content="Loja virtual de teste para demonstrar os recursos do ReactJS."/>
                    <meta property="og:locale" content="pt_BR"/>
                    <meta property="og:url" content={window.location.pathname + window.location.search}/>
                    <meta property="og:title" content="Fashionista - Home"/>
                    <meta property="og:site_name" content="Fashionista"/>
                    <meta property="og:description" content="Loja virtual de teste para demonstrar os recursos do ReactJS."/>
                    <meta property="og:image" content={ window.location.pathname + "/static/media/banner.jpg"} />
                    <meta property="og:image:type" content="image/jpeg"/>
                    <meta property="og:image:width" content="800"/>
                    <meta property="og:image:height" content="600"/>
                    <meta property="og:type" content="website"/>
                </Helmet>
                {
                    props.productList.length === 0 ? <Preloader />:
                    <ProductsList productList={props.productList}/>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    productList: state.ProductReducer
})

export default connect(mapStateToProps)(Home);