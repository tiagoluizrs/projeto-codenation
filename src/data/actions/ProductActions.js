export const PRODUCT_LIST = 'PRODUCT_LIST';
export const PRODUCT_LIST_RESPONSE = 'PRODUCT_LIST_RESPONSE';

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
