import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from "./slices/authSlice";
import eventSlice from './slices/eventSlice';
import registerSlice from './slices/registerSlice';
import {docsSlice} from "./slices/docSlice";
import userSlice from './slices/userSlice';

// const middleware = getDefaultMiddleware({
//     immutableCheck: false,
//     serializableCheck: false,
//     thunk: true,
// });
import {newSlice} from "./slices/newsSlice";
import applicationSlice from './slices/applicationSlice';

export const store = configureStore({
  reducer: { reducer, 
    register:registerSlice,
    event:eventSlice,
    docs: docsSlice,
    user:userSlice,
    news: newSlice,
    application:applicationSlice
},

  // devTools: process.env.NODE_ENV !== 'production',
});