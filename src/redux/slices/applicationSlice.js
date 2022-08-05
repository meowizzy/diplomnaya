import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { requests } from "../api";


const initialState = {
  application: [],
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
    },
  });
  
  // export const { application } = applicationSlice.actions;
  
  export default applicationSlice.reducer;