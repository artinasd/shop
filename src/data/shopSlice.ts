import {createSlice} from "@reduxjs/toolkit";

interface Product {
    id: number;
    title: string;
    price: number;
    image: string
    category: string;
    status: string
    description: string
}

interface RootState {
    shop: Product[]
}

const saveData = (state: RootState) => {
    localStorage.setItem('STORED_DATA', JSON.stringify(state))
}

export const loadData = () => {
    const rawData = localStorage.getItem('STORED_DATA')
    if (rawData) {
        const loadedData = JSON.parse(rawData);
        return {shop: loadedData.shop};
    }
}

const shopSlice = createSlice({
    name: 'shop',
    initialState: [] as Product[],
    reducers: {
        addProduct: (state, action) => {
            console.log(action.payload)
            state.push(action.payload);
            saveData({shop: state})
        },
        changeProduct: (state, action) => {
            const selectedProduct = state.findIndex((whatever: any) => whatever.id === action.payload.id)
            if (selectedProduct !== -1) {
                state[selectedProduct] = {...state[selectedProduct], ...action.payload}
            }
            saveData({shop: state})
        }
    }
})

export default shopSlice.reducer;
export const shopActions = shopSlice.actions
export type {RootState}
export type {Product}