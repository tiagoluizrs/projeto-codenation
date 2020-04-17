import React, {Component} from "react";
import ProductList from "../components/product/ProductList";

class Home extends Component{
    render(){
        return(
            <div>
                Página home
                <ProductList />
            </div>
        )
    }
}

export default Home;