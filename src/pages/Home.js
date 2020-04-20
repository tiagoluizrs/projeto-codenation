import React, {Component} from "react";
import ProductsList from "../components/product/ProductsList";
import * as ProductActions from "../data/actions/ProductActions";
import {connect} from "react-redux";
import Preloader from "../components/Preloader";

class Home extends Component{
    static defaultProps = {
        productList: null,
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