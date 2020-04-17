import React, {Component} from "react";
import ProductsList from "../components/product/ProductsList";

class Home extends Component{
    static defaultProps = {
        productList: [],
    }

    constructor(props){
        super(props);
    }

    render(){
        const { props } = this;
        return(
            <ProductsList products={props.productList}/>
            // <ProductsList />
        )
    }
}

export default Home;