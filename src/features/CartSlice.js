import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
};

const CartSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { item, quantity } = action.payload;
            const existingItem = state.cartItems.find(i => i.id === item.id);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.cartItems.push({...item, quantity});
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },
        increaseQuantity: (state, action) => {  
            const item = state.cartItems.find(item => item.id === action.payload);
            if (item) {
                item.quantity++;
            }
        },
        decreaseQuantity: (state, action) => {  
            const item = state.cartItems.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity--;
            }
        }
    }
});


export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = CartSlice.actions;
export default CartSlice.reducer;
