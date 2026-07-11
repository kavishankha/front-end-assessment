import {call, put, takeLatest} from "redux-saga/effects";

import {
    fetchCategoriesRequest,
    fetchCategoriesSuccess,

    fetchProductsRequest,
    fetchProductsSuccess,

    fetchProductDetailsRequest,
    fetchProductDetailsSuccess

} from "./productSlice";


import {productApi} from "./productApi";

// GET CATEGORIES
function* getCategories() {
    const response: any = yield call(productApi.getCategories);
    yield put(fetchCategoriesSuccess(response.data));
}

// GET PRODUCTS BY CATEGORY
function* getProducts(action: any) {
    const categoryId = action.payload;
    const response: any = yield call(productApi.getProducts, categoryId);
    yield put(fetchProductsSuccess(response.data));

}

// GET PRODUCT DETAILS
function* getProductDetails(action: any) {
    const productId = action.payload;
    const response: any = yield call(productApi.getProductDetails, productId);
    yield put(fetchProductDetailsSuccess(response.data));
}

export function* productSaga() {
    yield takeLatest(fetchCategoriesRequest.type, getCategories);
    yield takeLatest(fetchProductsRequest.type, getProducts);
    yield takeLatest(fetchProductDetailsRequest.type, getProductDetails);


}