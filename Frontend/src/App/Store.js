import { configureStore } from '@reduxjs/toolkit';

import { Reducer as AuthSlicer } from '../Redux/Auth/AuthSlicer';

export const store = configureStore({
  reducer: AuthSlicer,
});
