import {combineReducers} from "@reduxjs/toolkit";
import productReducer from "./products/productSlice";

const rootReducer = combineReducers({products: productReducer});

export default rootReducer;