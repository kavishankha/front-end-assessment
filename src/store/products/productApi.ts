import api from "../../services/api";

export const productApi = {
    getCategories() {
        return api.get("/products/categories");
    },

    getProductsByCategory(categoryId: string) {
        return api.get(`/products/category/${categoryId}`);
    },

    getProductDetails(productIds: number[]) {
        return Promise.all(productIds.map(id => api.get(`/products/${id}`)));
    }
};