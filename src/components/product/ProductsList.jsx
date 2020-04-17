import React, {Component} from 'react';
import './ProductsList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThList, faThLarge } from '@fortawesome/free-solid-svg-icons'
import ProductItem from "./ProductItem";

class ProductsList extends Component{
    static defaultProps = {
        products: [
            {
                "image": "https://i.pinimg.com/474x/f9/ec/a0/f9eca058c6c9e619cf10d48bdf4b3238--folk.jpg",
                "name": "Regata Alcinha Folk",
                "price": 99.9,
                "status": 2,
                "promotional_price": 89.99,
                "sizes": [
                    "36",
                    "37",
                    "38"
                ],
                "id": "1587134971941"
            },
            {
                "image": "https://i.pinimg.com/474x/f9/ec/a0/f9eca058c6c9e619cf10d48bdf4b3238--folk.jpg",
                "name": "Regata Alcinha Folk",
                "price": 99.9,
                "status": 2,
                "promotional_price": 89.99,
                "sizes": [
                    "36",
                    "37",
                    "38"
                ],
                "id": "1587134971941"
            }
        ],
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
        if(props.products.length === 0){
            return <div>Nenhum produto encontrado</div>
        }
        return(
            <div className="products">
                <div className="container">
                    <div className="row">
                        <div className="column column__small--12">
                            <div className="products__layout">
                                <button type="button" onClick={ this.changeColumn }>
                                    <FontAwesomeIcon icon={state.icon}/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row row--flexstart">
                        {
                            props.products.map(product => <ProductItem
                                key={product.id}
                                product={product}
                                columns={state.columns}/>)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductsList;