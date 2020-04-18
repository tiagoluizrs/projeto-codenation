import * as ProductConstants from "../actions/ProductActions";

const productReducer = (productItem = {}, action) => {
    switch(action.type){
        case ProductConstants.PRODUCT_ITEM_RESPONSE:
            return action.productItem;
        default: return productItem;
    }
}

export default productReducer;