import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  prices: {},
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    updateCryptoPrice: (state, action) => {
      state.prices = { ...state.prices, ...action.payload };
    },
  },
});

export const { updateCryptoPrice } = cryptoSlice.actions;
export default cryptoSlice.reducer; 
