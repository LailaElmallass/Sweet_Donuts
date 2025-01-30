import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems: [],
}
                                                                                                                                                                                                                                                            
const CartSlice = createSlice({
  name : 'cartItems',
  initialState,
  reducers: {
    addToCart : (state, action) => {
        const { item, quantity} = action.payload;
        const existingItem = state.cartItems.find(item => item.id === action.payload.id);
        if(existingItem) {
            existingItem.quantity += quantity;
        } else {
            state.cartItems.push({...item, quantity})
        }
    },
    removeFromCart : (state, action) => {
        state.cartItems = state.cartItems.filter(item => item.id!== action.payload.id);
    },
    IncreaseQuantity : (state, action) => {
        const { itemId } = action.payload;
        const item = state.cartItems.find(item => item.id === itemId);
        if(item) {
            item.quantity++;
        }
    },
    DecreaseQuantity : (state, action) => {
        const { itemId } = action.payload;
        const item = state.cartItems.find(item => item.id === itemId);
        if(item && item.quantity > 1) {
            item.quantity--;
        }
    }
  }

})

export const { addToCart, removeFromCart, IncreaseQuantity, DecreaseQuantity } = CartSlice.actions;
export default CartSlice.reducer;