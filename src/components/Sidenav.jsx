import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import ProductList from "./product/ProductList";

class Sidenav extends Component{
    render(){
        return(
            <div>
                <SearchBar />
                <ProductList />
            </div>
        )
    }
}

export default Sidenav;