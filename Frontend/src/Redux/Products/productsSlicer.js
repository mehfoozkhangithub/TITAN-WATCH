import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productsApi } from './ProductApi';

export const products = createAsyncThunk(
  'users/products',
  async (_, { rejectWithValue }) => {
    try {
      const res = await productsApi();
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

const productsSlicer = createSlice({
  name: 'products',
  initialState: {
    productData: [],
    isLoading: false,
    isError: { status: null, msg: null },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(products.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(products.fulfilled, (state, action) => {
        state.productData = action.payload;
        state.isLoading = false;
      })
      .addCase(products.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = {
          status: true,
          msg: action.payload || 'Error fetching products',
        };
      });
  },
});

export const Reducer = productsSlicer.reducer;
