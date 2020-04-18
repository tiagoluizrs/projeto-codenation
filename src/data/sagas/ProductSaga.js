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

export default function* ProductSaga(){
    yield all([
        watchListAll(),
        watchListItem()
    ])
}