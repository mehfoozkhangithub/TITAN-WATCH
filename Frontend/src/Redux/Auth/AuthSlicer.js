import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginApi, signupApi } from './AuthApi';

export const loginUser = createAsyncThunk(
  'users/login',
  async (data, { rejectWithValue }) => {
    try {
      const res = await loginApi(data);
      console.log('🚀 ~ data:', data);
      console.log('🚀 ~ res.data:', res);
      return res;
    } catch (err) {
      console.log('🚀 ~ err:', err.response);

      return rejectWithValue(err.response);
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
    isAuth: localStorage.getItem('token') ? true : false,
    isLoading: false,
    isError: { status: null, msg: null },
    token: localStorage.getItem('token') || '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = {
          status: action.payload.status,
          msg: action.payload.data.msg,
          token: action.payload.data.token,
        };
        state.isLoading = false;
        state.isAuth = true;

        localStorage.setItem('token', JSON.stringify(action.payload));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isError = {
          status: action.payload.status,
          msg: action.payload.data,
        };
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

export const Reducer = AuthSlicer.reducer;
