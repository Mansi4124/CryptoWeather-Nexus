import { createSlice } from "@reduxjs/toolkit";


const loadFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("favouriteCities");
    return data ? JSON.parse(data) : [];
  }
  return [];
};

const initialState= {
  favouriteCities: loadFromLocalStorage(),
};

const favouriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavourite: (state, action) => {
      const city = action.payload;
      if (state.favouriteCities.includes(city)) {
        state.favouriteCities = state.favouriteCities.filter((c) => c !== city);
      } else {
        state.favouriteCities.push(city);
      }
      localStorage.setItem("favouriteCities", JSON.stringify(state.favouriteCities));
    },
  },
});

export const { toggleFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;
