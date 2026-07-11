export interface Category {
    id:string;
    name:string;
}

export interface Product {
    id:string;
    name:string;
    categoryId:string;
}

export interface ProductDetails {
    id:string;
    name:string;
    price:number;
    description:string;
}