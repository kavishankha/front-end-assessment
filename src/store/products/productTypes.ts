// API Response types
export interface CategoryResponse {
    slug: string;
    name: string;
}

export interface ProductResponse {
    id: number;
    title: string;
    price: number;
}

export interface ProductsApiResponse {
    products: ProductResponse[];
}

// App types
export interface Category {
    id: string;
    name: string;
}

export interface Product {
    id: number;
    name: string;
}

export interface ProductDetail {
    id: number;
    name: string;
    price: number;
}

export interface ChartDataPoint {
    name: string;
    y: number;
}

export type ChartType = "pie" | "column";
