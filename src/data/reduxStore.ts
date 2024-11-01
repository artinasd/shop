import {configureStore} from "@reduxjs/toolkit";
import shopSlice from "./shopSlice.ts";
import {loadData} from "./shopSlice.ts";

const reduxStore = configureStore({
    reducer: {shop: shopSlice},
    preloadedState: loadData()
})

export default reduxStore