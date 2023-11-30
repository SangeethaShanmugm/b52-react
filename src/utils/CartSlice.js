import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
            console.log("action", action.payload)
            console.log("state", state.items)
        },
        clearCart: (state, action) => {
            state.items = []
        }
    }
})

export const { addItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer