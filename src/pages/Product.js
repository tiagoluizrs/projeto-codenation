import React, {Component} from 'react';

class Product extends Component{
    // constructor(props) {
    //     super(props);
    // }

    render(){
        const {match} = this.props;

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