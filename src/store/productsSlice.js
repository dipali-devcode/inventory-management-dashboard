import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://dummyjson.com/productsm");

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      return data.products;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {})
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
      });
  },
});

export default productsSlice.reducer;
