import {createSlice} from '@reduxjs/toolkit'
import donuts from '../DonutsObject'

const initialState = {
  items: donuts
}
const DonutsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addDonut : (state, action) => {
            state.items.push(action.payload)
        },
        removeDonut : (state, action) => {
            const idx = state.items.findIndex(item => item.id === action.payload)
            if(idx !== -1){
                state.items.filter(item => item.id === action.payload)
            }
        }
    }
  
})

export const {addDonut, removeDonut} = DonutsSlice.actions;
export default DonutsSlice.reducer;