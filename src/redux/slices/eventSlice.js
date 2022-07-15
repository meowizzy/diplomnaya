import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { requests } from "../api";


const initialState = {
  events: [],
  error:{}
};

export const getEvents = createAsyncThunk(
  "event/getEvents",
  async function(_,{ rejectWithValue}){
    try {
      const res = await requests.getEvents();
      console.log(res)
      // if (!res) {
      //   throw new Error("ERROR");
      // }
      // const data = await res.json();
      console.log(res)
      // return res
    } catch (error) {
        return rejectWithValue(error.message)
    }
  }
);

const eventSlice = createSlice({
  name: "event",
  initialState,
  status: null,
  error: null,
  reducers: {
    getEvents: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [getEvents.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [getEvents.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.events = action.payload
      console.log("fullfiled");
    },
    [getEvents.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { events } = eventSlice.actions;

export default eventSlice.reducer;