import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchItems as fetchItemsAPI } from "../../services/api";

export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const response = await fetchItemsAPI();
  return response.data;
});

const itemSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default itemSlice.reducer;
