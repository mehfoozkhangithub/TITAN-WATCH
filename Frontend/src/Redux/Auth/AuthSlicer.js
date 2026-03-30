import { createSlice } from '@reduxjs/toolkit';

const AuthSlicer = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    isLoading: false,
    isError: false,
    token: '',
  },
  reducers: {
    signup: (state, { type, payload }) => {},
  },
});

export const { addTodo } = AuthSlicer.actions;
export const Reducer = AuthSlicer.reducer;
