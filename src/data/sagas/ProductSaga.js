import * as ProductActions from '../actions/ProductActions';
import * as SearchActions from '../actions/SearchAction';
import { ProductService } from '../services/ProductService';

import { all, put, takeLatest } from 'redux-saga/effects';

function* listAll(){
    const productList = yield ProductService.list();
    yield put(ProductActions.listResponse(productList))
}

function* watchListAll(){
    yield takeLatest(ProductActions.PRODUCT_LIST, listAll);
}

function* listItem(action){  // fixed
    const id = action.id
    const productItem = yield ProductService.byId(id);
    yield put(ProductActions.listItemResponse(productItem))
}

function* watchListItem(){
    yield takeLatest(ProductActions.PRODUCT_ITEM, listItem);
}

function* searchProducts(action){  // fixed
    const name = action.name

    const searchList = yield ProductService.byName(name);
    yield put(SearchActions.searchResponse(searchList))
}

function* watchSearch(){
    yield takeLatest(SearchActions.SEARCH, searchProducts);
}

export default function* ProductSaga(){
    yield all([
        watchListAll(),
        watchListItem(),
        watchSearch(),
    ])
}