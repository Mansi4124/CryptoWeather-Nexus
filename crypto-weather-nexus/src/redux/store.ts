"use client";
import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favoritesSlice";
import cryptoReducer from "./cryptoSlice";
import weatherReducer from "./weatherSlice";
import weatherHistoryReducer from "./weatherHistorySlice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    crypto: cryptoReducer,
    weather: weatherReducer,
    weatherHistory: weatherHistoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
