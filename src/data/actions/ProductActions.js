export const PRODUCT_LIST = 'PRODUCT_LIST';
export const PRODUCT_LIST_RESPONSE = 'PRODUCT_LIST_RESPONSE';
export const PRODUCT_ITEM = 'PRODUCT_ITEM';
export const PRODUCT_ITEM_RESPONSE = 'PRODUCT_ITEM_RESPONSE';
export const PRODUCT_SEARCH = 'PRODUCT_SEARCH';
export const PRODUCT_SEARCH_RESPONSE = 'PRODUCT_SEARCH_RESPONSE';

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

export const item = (id) => {
    return {
        type: PRODUCT_ITEM,
        id
    }
}

export const listItemResponse = (productItem) => {
    return {
        type: PRODUCT_ITEM_RESPONSE,
        productItem
    }
}

export const search = (name) => {
    return {
        type: PRODUCT_SEARCH,
        name
    }
}

export const searchResponse = (productList) => {
    return {
        type: PRODUCT_SEARCH_RESPONSE,
        productList
    }
}