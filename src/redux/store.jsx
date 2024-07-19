import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../redux/slices/appSlice';
import ProductReducer from '../redux/slices/productSlice';
import basketReducer from '../redux/slices/basketSlice';



export const store = configureStore({
    reducer: {
        app: appReducer,
        product: ProductReducer,
        basket: basketReducer
    },
})