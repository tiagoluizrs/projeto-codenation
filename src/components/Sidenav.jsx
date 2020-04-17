import React, {Component} from 'react';
import './Sidenav.css';

import SearchBar from "./SearchBar";
import ProductsList from "./product/ProductsList";

class Sidenav extends Component{
    render(){
        return(
            <div>
                <SearchBar />
                {/*<ProductsList />*/}
            </div>
        )
    }
}

export default Sidenav;