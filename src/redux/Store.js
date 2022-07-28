import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from "./slices/authSlice";
import eventSlice from './slices/eventSlice';
import registerSlice from './slices/registerSlice';
import {docsSlice} from "./slices/docSlice";
import {newSlice} from "./slices/newsSlice";

export const store = configureStore({
  reducer: { reducer, 
    register:registerSlice,
    event:eventSlice,
    docs: docsSlice,
    news: newSlice,
},

  // devTools: process.env.NODE_ENV !== 'production',
});