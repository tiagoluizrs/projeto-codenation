import * as ProductConstants from '../actions/ProductActions';

const ProductsReducer = (productList = [], action) => {
    switch(action.type){
        case ProductConstants.PRODUCT_LIST_RESPONSE:
            return action.productList;
        default: return productList;
    }
}

export default ProductsReducer;

