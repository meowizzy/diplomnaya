import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { requests } from "../api";


const initialState = {
  event: [],
  error:{}
};

export const getEvent = createAsyncThunk(
  "event/getEvent",
  async function(_,{ rejectWithValue}){
    try {
      const res = await requests.getEvents();
      // console.log(res.data)
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
  "event/createEvent",
  async (data ,{ rejectWithValue }) => {
    console.log("form", data.values)
    try {
      const res = await requests.postEvents(data.values);
      data.handleOpneSuccessModal()
      // console.log("res", res)
      if (!res) {
        throw new Error("ERROR");
      }
    } catch (error) {
        return rejectWithValue(error.message)
    }
  }
);

export const editEvent = createAsyncThunk(
  "event/editEvent",
  async (data, { rejectWithValue }) => {
    console.log("form", data.values)
    try {
      const res = await requests.editEvents(data);
      console.log("res", data.values)
      // if (!res) {
      //   throw new Error("ERROR");
      // }
      return res.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
  }
);

export const deleteEvent = createAsyncThunk(
  "event/deleteEvent",
 
  async (id ,{ rejectWithValue }) => {
    console.log("form", id)
    try {
      const res = await requests.deleteEvents(id);
      console.log("res", res)
      // if (!res) {
      //   throw new Error("ERROR");
      // }
      return id
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
  deleteStatus:null,
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
      // console.log("fullfiled");
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
      // console.log("fullfiled");
    },
    [createEvent.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [deleteEvent.rejected]: (state, action) => {
      state.deleteStatus = "rejected";
      state.error = action.payload;
    },
    [deleteEvent.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.event = state.event.filter(el=>(
        el.id!==action.payload
      ))
      // console.log("fullfiled");
    },
  },
});

// export const { event } = eventSlice.actions;

export default eventSlice.reducer;