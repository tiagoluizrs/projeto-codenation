import * as ProductConstants from '../actions/ProductActions';

const ProductReducer = (productList = [], action) => {
    switch(action.type){
        case ProductConstants.PRODUCT_LIST_RESPONSE:
            return action.productList;
        case ProductConstants.PRODUCT_ITEM_RESPONSE:
            return action.productItem;
        default: return productList;
    }
}

export default ProductReducer;
