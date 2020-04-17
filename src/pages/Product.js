import React, {Component} from 'react';

class Product extends Component{

    render(){
        const { props } = this,
              { match } = props;

        return(
            <div>
                <div>
                    Página de produto <br />
                    Id do produto { match.params.id }
                </div>
            </div>
        )
    }
}

export default Product;