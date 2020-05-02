export const PRODUCT_LIST = 'PRODUCT_LIST';
export const PRODUCT_LIST_RESPONSE = 'PRODUCT_LIST_RESPONSE';
export const PRODUCT_ITEM = 'PRODUCT_ITEM';
export const PRODUCT_ITEM_RESPONSE = 'PRODUCT_ITEM_RESPONSE';

export const list = () => {
    return {
        type: PRODUCT_LIST,
    }
}

export const listResponse = (productList) => {
    return {
        type: PRODUCT_LIST_RESPONSE,
        productList
    }
}

export const item = (name) => {
    return {
        type: PRODUCT_ITEM,
        name
    }
}

export const listItemResponse = (productItem) => {
    return {
        type: PRODUCT_ITEM_RESPONSE,
        productItem
    }
}