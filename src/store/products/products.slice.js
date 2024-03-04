import { createSlice } from '@reduxjs/toolkit';

export const PRODUCTS_INITIAL_STATE = {
    products: [],
    selectedProduct: null
};

export const productsSlice = createSlice({
    name: 'products',
    initialState: PRODUCTS_INITIAL_STATE,
    reducers: {
        setProducts(state, action) {
            state.products = action.payload;
        },
        setSelectedProduct(state, action) {
            state.selectedProduct = action.payload
        }
    },
});

export const { setProducts, setSelectedProduct } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;