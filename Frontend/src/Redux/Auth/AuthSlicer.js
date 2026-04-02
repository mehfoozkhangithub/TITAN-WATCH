import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginApi, signupApi } from './AuthApi';

export const loginUser = createAsyncThunk(
  'users/login',
  async (data, { rejectWithValue }) => {
    try {
      const res = await loginApi(data);
      console.log('🚀 ~ res.data:', res.data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const signUser = createAsyncThunk(
  'users/signup',
  async (data, { rejectWithValue }) => {
    try {
      const res = await signupApi(data);
      console.log('🚀 ~ res:', res.data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

const AuthSlicer = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    isLoading: false,
    isError: { status: false, msg: null },
    token: localStorage.getItem('token') || '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload;
        state.isLoading = false;
        state.isAuth = true;

        localStorage.setItem('token', JSON.stringify(action.payload));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isError.status = true;
        state.isError.msg = action.payload;
        state.isLoading = false;
        state.isAuth = false;
        state.token = '';
      })
      // signup

      .addCase(signUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUser.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(signUser.rejected, (state) => {
        state.isError = true;
      });
  },
});

export const { addTodo } = AuthSlicer.actions;
export const Reducer = AuthSlicer.reducer;
