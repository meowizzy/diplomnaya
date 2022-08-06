import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { requests } from "../api";


const initialState = {
  application: [],
  applicationById:{},
  error:{}
};

export const getApplication = createAsyncThunk(
  "application/application",
  async function(_,{ rejectWithValue}){
    try {
      const res = await requests.getApplication();
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
export const getApplicationById = createAsyncThunk(
  "application/getApplicationById",
  async function(id,{ rejectWithValue}){
    try {
      const res = await requests.getApplicationById(id);
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

const applicationSlice = createSlice({
    name: "application",
    initialState,
    status: null,
    error: null,
    deleteStatus:null,
    extraReducers: {
      [getApplication.pending]: (state) => {
        state.status = "loading";
        state.error = null;
      },
      [getApplication.fulfilled]: (state, action) => {
        state.status = "resolved";
        state.application = action.payload
        // console.log("fullfiled");
      },
      [getApplication.rejected]: (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      },
      [getApplicationById.pending]: (state) => {
        state.status = "loading";
        state.error = null;
      },
      [getApplicationById.fulfilled]: (state, action) => {
        state.status = "resolved";
        state.applicationById = action.payload
        // console.log("fullfiled");
      },
      [getApplicationById.rejected]: (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      },
    },
  });
  
  // export const { application } = applicationSlice.actions;
  
  export default applicationSlice.reducer;