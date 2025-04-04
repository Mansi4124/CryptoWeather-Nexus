"use client"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWeather } from "../app/api/weather"; // Ensure this function exists

const cities = ["New York", "London", "Tokyo", "California", "Mumbai", "San Francisco"];

export const fetchWeatherData = createAsyncThunk("weather/fetchWeatherData", async () => {
  const weatherData = {};
  try {
    const data = await Promise.all(
      cities.map(async (city) => {
        const weather = await fetchWeather(city);
        console.log(weather)
        return { city, weather };
      })
    );
    data.forEach(({ city, weather }) => {
      weatherData[city] = weather;
      
    });
  } catch (error) {
    throw new Error("Failed to fetch weather data");
  }
  return weatherData;
});

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weatherData: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.loading = false;
        state.weatherData = action.payload;
        console.log(state.weatherData);
        
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
