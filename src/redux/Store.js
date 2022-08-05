import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {authSlices} from "./slices/authSlice";
import eventSlice from './slices/eventSlice';
import registerSlice from './slices/registerSlice';
import {docsSlice} from "./slices/docSlice";
import userSlice from './slices/userSlice';


import {newSlice} from "./slices/newsSlice";
import {clubsSlice} from "./slices/clubSlice";
import {sportsmanSlice} from "./slices/sportsmenSlice";

export const store = configureStore({
  reducer: {
    register: registerSlice,
    event: eventSlice,
    docs: docsSlice,
    user: userSlice,
    news: newSlice,
    auth: authSlices,
    clubs: clubsSlice,
    sportsmen: sportsmanSlice,
},

});