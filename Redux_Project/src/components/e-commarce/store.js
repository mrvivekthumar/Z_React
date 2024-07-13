import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/slices/productSlice";
import cartReducer from "../redux/slices/cartSlice";


export default configureStore({
  reducer: {
    productReducer,
    cartReducer,
  },
});
