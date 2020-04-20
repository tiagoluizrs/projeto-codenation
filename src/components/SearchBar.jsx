import React, {Component} from 'react';
import './SearchBar.css';

class SearchBar extends Component{
    static defaultProps = {
        search: () => {}
    }

    constructor() {
        super();
        this.search = this.search.bind(this);
    }

    async search(event){
        const { props } = this,
              { target } = event;
        await props.search(target);
    }

    render(){
        return(
            <div className="search-sidenav">
                <input className="search-sidenav__input" onKeyUp={this.search} type="text" />
            </div>
        )
    }
}

export default SearchBar;