import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/slices/productSlice";
import cartReducer from "../redux/slices/cartReducer";
export default configureStore({
  reducer: {
    productReducer,
    cartReducer,
  },
});
