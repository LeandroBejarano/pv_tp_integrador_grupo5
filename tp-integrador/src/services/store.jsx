import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./ProductsSlice"

const PERSIST_KEY = 'productos_app_state'

const persistedState = localStorage.getItem(PERSIST_KEY)
    ? JSON.parse(localStorage.getItem(PERSIST_KEY))
    : undefined;

export const store = configureStore({
    reducer: {
        products: productsReducer,
    },
    preloadedState: persistedState,
})

store.subscribe(() => {
    localStorage.setItem(PERSIST_KEY, JSON.stringify({
        products: store.getState().products
    }));
});