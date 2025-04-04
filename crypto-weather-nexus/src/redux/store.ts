"use client"
import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favoritesSlice";
import cryptoReducer from "./cryptoSlice";
import weatherReducer from "./weatherSlice";
import { useDispatch } from "react-redux";
export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    crypto: cryptoReducer,
    weather: weatherReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;


export default store;
