import { combineReducers } from 'redux';
import ProductsReducer from './ProductsReducer';
import ItemReducer from './ProductReducer';

export default combineReducers({
    ProductReducer: ProductsReducer,
    ItemReducer
})