import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import type {Category, Product, ProductDetail, ChartDataPoint, ChartType} from "./productTypes";

interface ProductState {
    categories: Category[];
    products: Product[];
    productDetails: ProductDetail[];
    selectedCategory: string | null;
    selectedProducts: number[];
    chartData: ChartDataPoint[];
    chartType: ChartType;
    loading: boolean;
    error: string | null;
    reportGenerated: boolean;
    hasFilterChanged: boolean;
}

const initialState: ProductState = {
    categories: [],
    products: [],
    productDetails: [],
    selectedCategory: null,
    selectedProducts: [],
    chartData: [],
    chartType: "pie",
    loading: false,
    error: null,
    reportGenerated: false,
    hasFilterChanged: false,
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        // Categories
        fetchCategoriesRequest(state) {
            state.loading = true;
        },
        fetchCategoriesSuccess(state, action: PayloadAction<Category[]>) {
            state.categories = action.payload;
            state.loading = false;
            state.chartData = action.payload.map(cat => ({
                name: cat.name,
                y: 1
            }));
            state.chartType = "pie";
        },
        fetchCategoriesFailure(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.loading = false;
        },

        // Products by category
        fetchProductsRequest(state, action: PayloadAction<string>) {
            state.loading = true;
            state.selectedCategory = action.payload;
            state.selectedProducts = [];
            state.hasFilterChanged = true;
        },
        fetchProductsSuccess(state, action: PayloadAction<Product[]>) {
            state.products = action.payload;
            state.loading = false;
            state.chartData = action.payload.map(product => ({
                name: product.name,
                y: 1
            }));
            state.chartType = "pie";
        },
        fetchProductsFailure(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.loading = false;
        },

        // Product details price
        fetchProductDetailsRequest(state) {
            state.loading = true;

        },
        fetchProductDetailsSuccess(state, action: PayloadAction<ProductDetail[]>) {
            state.productDetails = action.payload;
            state.loading = false;
            state.chartData = action.payload.map(product => ({
                name: product.name,
                y: product.price
            }));
            state.chartType = "pie";
        },
        fetchProductDetailsFailure(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.loading = false;
        },

        // Select products
        setSelectedProducts(state, action: PayloadAction<number[]>) {
            state.selectedProducts = action.payload;
            state.hasFilterChanged = true;
        },

        // Run report
        runReport(state) {
            state.chartType = "column";
            state.reportGenerated = true;
            state.hasFilterChanged = false;
        },

        // Clear filters
        clearAllFilters(state) {
            state.selectedCategory = null;
            state.products = [];
            state.productDetails = [];
            state.selectedProducts = [];
            state.hasFilterChanged = false;
            state.reportGenerated = false;
            state.chartData = state.categories.map(cat => ({
                name: cat.name,
                y: 1
            }));
            state.chartType = "pie";
        },
    }
});

export const {
    fetchCategoriesRequest,
    fetchCategoriesSuccess,
    fetchCategoriesFailure,
    fetchProductsRequest,
    fetchProductsSuccess,
    fetchProductsFailure,
    fetchProductDetailsRequest,
    fetchProductDetailsSuccess,
    fetchProductDetailsFailure,
    setSelectedProducts,
    runReport,
    clearAllFilters,
} = productSlice.actions;

export default productSlice.reducer;
