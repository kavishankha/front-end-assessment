import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Category, Product, ProductDetails} from "./productTypes";

interface ProductState {
    categories: Category[];
    products: Product[];
    productDetails: ProductDetails | null;
    loading: boolean;
    error: string | null;
}

const initialState: ProductState = {
    categories: [],
    products: [],
    productDetails: null,
    loading: false,
    error: null

};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {


        // CATEGORY
        fetchCategoriesRequest(state) {state.loading = true;}, fetchCategoriesSuccess(state, action: PayloadAction<Category[]>) {
            state.categories = action.payload;
            state.loading = false;
        },

        fetchCategoriesFailure(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.loading = false;
        },

        // PRODUCTS
        fetchProductsRequest(state, action: PayloadAction<string>) {},
        fetchProductsSuccess(state, action: PayloadAction<Product[]>) {
            state.products = action.payload;
        },


        // PRODUCT DETAILS
        fetchProductDetailsRequest(
            state,
            action: PayloadAction<string>
        ) {
        },


        fetchProductDetailsSuccess(
            state,
            action: PayloadAction<ProductDetails>
        ) {

            state.productDetails = action.payload;

        }


    }


});


export const {

    fetchCategoriesRequest,

    fetchCategoriesSuccess,

    fetchCategoriesFailure,


    fetchProductsRequest,

    fetchProductsSuccess,


    fetchProductDetailsRequest,

    fetchProductDetailsSuccess


} = productSlice.actions;


export default productSlice.reducer;