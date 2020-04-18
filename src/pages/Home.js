import React, {Component} from "react";
import ProductsList from "../components/product/ProductsList";
import * as ProductActions from "../data/actions/ProductActions";
import {connect} from "react-redux";
import {App} from "../App";

class Home extends Component{
    static defaultProps = {
        productList: [],
    }

    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(ProductActions.list());
    }

    render(){
        const { props } = this;
        return(
            <ProductsList productList={props.productList}/>
        )
    }
}

const mapStateToProps = state => ({
    productList: state.ProductReducer
})

export default connect(mapStateToProps)(Home);