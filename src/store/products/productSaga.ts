import {call, put, takeLatest} from "redux-saga/effects";
import type {SagaIterator} from "redux-saga";
import type {AxiosResponse} from "axios";
import type {CategoryResponse, ProductsApiResponse, ProductResponse} from "./productTypes";

import {
    fetchCategoriesRequest,
    fetchCategoriesSuccess,
    fetchCategoriesFailure,
    fetchProductsRequest,
    fetchProductsSuccess,
    fetchProductsFailure,
    fetchProductDetailsRequest,
    fetchProductDetailsSuccess,
    fetchProductDetailsFailure,
} from "./productSlice";

import {productApi} from "./productApi";

function* getCategories(): SagaIterator {
    try {
        const response: AxiosResponse<CategoryResponse[]> = yield call(productApi.getCategories);
        const categories = response.data.map(cat => ({
            id: cat.slug,
            name: cat.name
        }));
        yield put(fetchCategoriesSuccess(categories));
    } catch (error) {
        yield put(fetchCategoriesFailure(error instanceof Error ? error.message : "Failed to fetch categories"));
    }
}

function* getProductsByCategory(action: ReturnType<typeof fetchProductsRequest>): SagaIterator {
    try {
        const categoryId = action.payload;
        const response: AxiosResponse<ProductsApiResponse> = yield call(productApi.getProductsByCategory, categoryId);
        const products = response.data.products.map(p => ({
            id: p.id,
            name: p.title
        }));
        yield put(fetchProductsSuccess(products));
    } catch (error) {
        yield put(fetchProductsFailure(error instanceof Error ? error.message : "Failed to fetch products"));
    }
}

function* getProductDetails(action: ReturnType<typeof fetchProductDetailsRequest>): SagaIterator {
    try {
        const productIds = action.payload;
        const responses: AxiosResponse<ProductResponse>[] = yield call(productApi.getProductDetails, productIds);
        const productDetails = responses.map(res => ({
            id: res.data.id,
            name: res.data.title,
            price: res.data.price
        }));
        yield put(fetchProductDetailsSuccess(productDetails));
    } catch (error) {
        yield put(fetchProductDetailsFailure(error instanceof Error ? error.message : "Failed to fetch product details"));
    }
}

export function* productSaga(): SagaIterator {
    yield takeLatest(fetchCategoriesRequest.type, getCategories);
    yield takeLatest(fetchProductsRequest.type, getProductsByCategory);
    yield takeLatest(fetchProductDetailsRequest.type, getProductDetails);
}
