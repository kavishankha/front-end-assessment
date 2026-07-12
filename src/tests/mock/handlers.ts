import { http, HttpResponse } from "msw";

export const handlers = [
    http.get("/api/categories", () => {
        return HttpResponse.json([
            "Electronics",
            "Books"
        ]);
    }),

    http.get("/api/products", () => {
        return HttpResponse.json([
            {
                id: 1,
                name: "Laptop"
            }
        ]);
    })
];