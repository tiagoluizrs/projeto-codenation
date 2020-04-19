export const SEARCH = 'SEARCH';
export const SEARCH_RESPONSE = 'SEARCH_RESPONSE';

export const search = (name) => {
    return {
        type: SEARCH,
        name
    }
}

export const searchResponse = (searchList) => {
    return {
        type: SEARCH_RESPONSE,
        searchList
    }
}