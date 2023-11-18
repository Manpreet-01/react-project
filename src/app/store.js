import { configureStore } from '@reduxjs/toolkit'
import productListReducer from '../features/products/productListSlice'

export const store = configureStore({
  reducer: {
    productListReducer,
  },
})