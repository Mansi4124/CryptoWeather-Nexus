"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWeather } from "../app/api/weatherHistory"; // Adjust path if necessary

// Async thunk for fetching weather history
export const fetchWeatherHistory = createAsyncThunk(
  "weatherHistory/fetchWeatherHistory",
  async (city, { rejectWithValue }) => {
    try {
      const data = await fetchWeather(city);
      console.log(data)
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Initial state
const initialState = {
  weatherData: null,
  loading: false,
  error: null,
};

// Weather history slice
const weatherHistorySlice = createSlice({
  name: "weatherHistory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherHistory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeatherHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.weatherData = action.payload;
      })
      .addCase(fetchWeatherHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default weatherHistorySlice.reducer;
