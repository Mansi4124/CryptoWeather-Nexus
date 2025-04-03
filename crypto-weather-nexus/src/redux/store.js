import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favoritesSlice";
import cryptoReducer from "./cryptoSlice";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    crypto: cryptoReducer,
  },
});

// ❌ REMOVE TypeScript-specific code
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export default store;
