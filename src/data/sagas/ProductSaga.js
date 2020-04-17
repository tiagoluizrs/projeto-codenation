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

export default function* ProductSaga(){
    yield all([
        watchListAll(),
    ])
}