import React, {Component} from "react";
import ProductsList from "../components/product/ProductsList";
import * as ProductActions from "../data/actions/ProductActions";
import {connect} from "react-redux";
import Preloader from "../components/Preloader";
import ReactGA from 'react-ga';

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
            props.productList.length === 0 ? <Preloader />:
                <div>
                    <ProductsList productList={props.productList}/>
                </div>
        )
    }
}

const mapStateToProps = state => ({
    productList: state.ProductReducer
})

export default connect(mapStateToProps)(Home);