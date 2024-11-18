import {configureStore} from "@reduxjs/toolkit";
import shopSlice from "./shopSlice.ts";
import {loadData} from "./shopSlice.ts";
import CartSlice from "./CartSlice.ts";

const reduxStore = configureStore({
    reducer: {shop: shopSlice, cart: CartSlice},
    preloadedState: loadData()
})

export default reduxStore