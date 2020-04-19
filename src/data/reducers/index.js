import { combineReducers } from 'redux';
import ProductsReducer from './ProductsReducer';
import ItemReducer from './ProductReducer';
import SearchReducer from "./SearchReducer";

export default combineReducers({
    ProductReducer: ProductsReducer,
    ItemReducer: ItemReducer,
    SearchReducer: SearchReducer
})