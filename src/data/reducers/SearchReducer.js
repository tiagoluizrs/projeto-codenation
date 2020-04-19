import * as SearchConstants from '../actions/SearchAction';

const SearchReducer = (searchList = [], action) => {
    switch(action.type){
        case SearchConstants.SEARCH_RESPONSE:
            return action.searchList;
        default: return searchList;
    }
}

export default SearchReducer;

