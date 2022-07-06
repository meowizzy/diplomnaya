import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import * as reducers from './';
import reducer from "./slices/authSlice";

// const middleware = getDefaultMiddleware({
//     immutableCheck: false,
//     serializableCheck: false,
//     thunk: true,
// });

export const store = configureStore({
    reducer: reducer,
    // devTools: process.env.NODE_ENV !== 'production',
});