import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from "./slices/authSlice";
import eventSlice from './slices/eventSlice';
import registerSlice from './slices/registerSlice';
import {docsSlice} from "./slices/docSlice";

// const middleware = getDefaultMiddleware({
//     immutableCheck: false,
//     serializableCheck: false,
//     thunk: true,
// });

export const store = configureStore({
  reducer: { reducer, 
    register:registerSlice,
    event:eventSlice,
    docs: docsSlice,
},

  // devTools: process.env.NODE_ENV !== 'production',
});