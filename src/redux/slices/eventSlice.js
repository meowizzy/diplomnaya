import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { requests } from "../api";


const initialState = {
  event: [],
  error:{}
};

export const getEvent = createAsyncThunk(
  "event/getEvents",
  async function(_,{ rejectWithValue}){
    try {
      const res = await requests.getEvents();
      console.log(res.data)
      if (!res) {
        throw new Error("ERROR");
      }
      return res.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
  }
);

export const createEvent = createAsyncThunk(
  "event/createEvents",
 
  async (formData ,{ rejectWithValue }) => {
    console.log("form", formData)
    try {
      const res = await requests.postEvents(formData);
      console.log("res", res)
      if (!res) {
        throw new Error("ERROR");
      }
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
    getEvent: (state, action) => {
      state.event = action.payload;
    },
  },
  extraReducers: {
    [getEvent.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [getEvent.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.event = action.payload
      console.log("fullfiled");
    },
    [getEvent.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [createEvent.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [createEvent.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.event = action.payload
      console.log("fullfiled");
    },
    [createEvent.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { event } = eventSlice.actions;

export default eventSlice.reducer;