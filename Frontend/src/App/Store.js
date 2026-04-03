import { configureStore } from '@reduxjs/toolkit';

import { Reducer as AuthSlicer } from '../Redux/Auth/AuthSlicer';
import { Reducer as productsSlicer } from '../Redux/Products/productsSlicer';

export const store = configureStore({
  reducer: { auth: AuthSlicer, products: productsSlicer },
});
