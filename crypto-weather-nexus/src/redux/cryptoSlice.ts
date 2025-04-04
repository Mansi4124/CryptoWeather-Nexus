import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface CryptoData {
  usd: number;
  usd_market_cap: number;
  usd_24h_change: number;
}

interface Notification {
  id: string;
  message: string;
  type: "success" | "error" | "info";
}

interface CryptoState {
  data: Record<string, CryptoData>;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  notifications: Notification[];
}

const initialState: CryptoState = {
  data: {},
  status: "idle",
  error: null,
  notifications: [],
};

// Async fetch for initial data
export const fetchCrypto = createAsyncThunk("crypto/fetchCrypto", async () => {
  const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin,solana&vs_currencies=usd&include_market_cap=true&include_24hr_change=true");
  return await response.json();
});

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    updateCryptoPrice: (state, action: PayloadAction<{ id: string; price: number }>) => {
      if (state.data[action.payload.id]) {
        state.data[action.payload.id].usd = action.payload.price;
        
        // Add toast notification
        state.notifications.push({
          id: action.payload.id,
          message: `${action.payload.id.toUpperCase()} price updated to $${action.payload.price}`,
          type: "info",
        });

        // Keep only the latest 3 notifications
        if (state.notifications.length > 3) {
          state.notifications.shift();
        }
      }
    },
    clearNotifications: (state) => {
      state.notifications = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCrypto.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCrypto.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchCrypto.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const { updateCryptoPrice, clearNotifications } = cryptoSlice.actions;
export default cryptoSlice.reducer;
