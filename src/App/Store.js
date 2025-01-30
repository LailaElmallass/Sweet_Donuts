import { configureStore } from "@reduxjs/toolkit";
import DonutsReducer from '../features/DonutsSlice';
import CartReducer from '../features/CartSlice'

const store = configureStore({
    reducer: {
        donuts: DonutsReducer,  
        cartItems : CartReducer
    }
})

export default store;