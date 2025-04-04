import { createSlice } from "@reduxjs/toolkit";

// Load data from local storage
const loadFromLocalStorage = (key) => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  }
  return [];
};

const initialState = {
  likedCities: loadFromLocalStorage("likedCities"),
  likedCryptos: loadFromLocalStorage("likedCryptos"),
};

const favouriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavouriteCity: (state, action) => {
      const city = action.payload;
      if (state.likedCities.includes(city)) {
        state.likedCities = state.likedCities.filter((c) => c !== city);
      } else {
        state.likedCities.push(city);
      }
      localStorage.setItem("likedCities", JSON.stringify(state.likedCities));
    },

    toggleFavouriteCrypto: (state, action) => {
      const cryptoId = action.payload;
      if (state.likedCryptos.includes(cryptoId)) {
        state.likedCryptos = state.likedCryptos.filter((id) => id !== cryptoId);
      } else {
        state.likedCryptos.push(cryptoId);
      }
      localStorage.setItem("likedCryptos", JSON.stringify(state.likedCryptos));
    },
  },
});

export const { toggleFavouriteCity, toggleFavouriteCrypto } = favouriteSlice.actions;
export default favouriteSlice.reducer;
