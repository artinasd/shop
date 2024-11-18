import {createSlice} from "@reduxjs/toolkit";

interface Product {
    id: number,
    title: string,
    image: string,
    price: number,
    quantity: number
}

interface RootState {
    cart: Product[]
}

const CartSlice = createSlice({
    name: 'CartSlice',
    initialState: [] as Product[],
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.findIndex((each) => each.id === action.payload.id)
            if (existingProduct !== -1) {
                state[existingProduct].quantity += 1
            }
            // If it does not exist already :
            else {
                state.push({...action.payload, quantity: 1})
            }
        },

        removeFromCart: (state, action) => {
            const existingProduct = state.findIndex((each) => each.id === action.payload.id)
            let currentQuantity = state[existingProduct].quantity

            if (currentQuantity > 1) {
                state[existingProduct].quantity -= 1
            }

            else if (currentQuantity === 1) {
                state.splice(existingProduct, 1)
            }
        }
    }
})

export default CartSlice.reducer
export const CartActions = CartSlice.actions
export type {RootState}