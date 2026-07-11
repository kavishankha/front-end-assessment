import api from "../../services/api";

export const productApi = {
    getCategories(){
        return api.get("/categories");
    },

    getProducts(categoryId:string){
        return api.get(`/products?category=${categoryId}`);
    },

    getProductDetails(productId:string){
        return api.get(`/products/${productId}`
        );
    }


};