import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addProducts: (state, action) => {
            const product = state.find(item => item.id === action.payload.id);

            if (product) {
                product.qty += 1;
                product.total = product.price * product.qty;
            } else {
                state.push({
                    id: action.payload.id,
                    title: action.payload.title,
                    price: action.payload.price,
                    thumbnail: action.payload.thumbnail,
                    qty: 1,
                    total: action.payload.price,
                });
            }

        },
        qtytotal: (state, action) => {
            const product = state.find(item => item.id === action.payload.id);
            if (product) {
                product.qty = action.payload.qty;
                product.total = product.price * product.qty;
            }
        },
        removePro: (state, action) => {
            const updatedCart = state.filter(item => item.id !== action.payload.id);
            return updatedCart;
        },

    },
});
export const { addProducts, qtytotal, removePro , userlogin } = counterSlice.actions;
export default counterSlice.reducer;
