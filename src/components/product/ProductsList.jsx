import React, {Component} from 'react';
import './ProductsList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThList, faThLarge, faSearchLocation } from '@fortawesome/free-solid-svg-icons'
import ProductItem from "./ProductItem";

class ProductsList extends Component{
    static defaultProps = {
        productList: [],
    }

    constructor(props){
        super(props);

        this.state = {
            columns: '--12',
            icon: faThLarge
        }
        this.changeColumn = this.changeColumn.bind(this);
    }

    changeColumn(event){
        const { state } = this;

        if(state.columns === '--12'){
            this.setState({
                columns: '--6',
                icon: faThList
            })
        }else{
            this.setState({
                columns: '--12',
                icon: faThLarge
            })
        }
    }

    render(){
        const { state, props } = this;
        if(props.productList.length === 0){
            return (
                <div className="products">
                    <div className="container">
                        <div className="row">
                            <div className="products__not-found">
                                <FontAwesomeIcon icon={faSearchLocation}/>
                                <p>Nenhum produto encontrado.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return(
            <main className="products">
                <div className="container">
                    <div className="row">
                        <div className="column column__small--12">
                            <div className="products__layout">
                                <div className="column column__small--6">
                                    <p>{ props.productList.length } itens</p>
                                </div>
                                <div className="column column__small--6 pr-0">
                                    <button type="button" id="changeColumn" onClick={ this.changeColumn }>
                                        <FontAwesomeIcon icon={state.icon}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row row--flexstart">
                        {
                            props.productList.map(product => <ProductItem
                                key={product.id}
                                product={product}
                                columns={state.columns}/>)
                        }
                    </div>
                </div>
            </main>
        )
    }
}

export default ProductsList;