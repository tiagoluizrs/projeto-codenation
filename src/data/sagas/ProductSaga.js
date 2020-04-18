import * as ProductActions from '../actions/ProductActions';
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

function* findItem(action){  // fixed
    const name = action.name

    const productList = yield ProductService.byName(name);
    yield put(ProductActions.searchResponse(productList))
}

function* watchFindItem(){
    yield takeLatest(ProductActions.PRODUCT_SEARCH, findItem);
}

export default function* ProductSaga(){
    yield all([
        watchListAll(),
        watchListItem(),
        watchFindItem()
    ])
}