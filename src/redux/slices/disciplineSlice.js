import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { requests } from "../api";


const initialState = {
  discipline:{},
  error:{}
};

export const getDiscipline = createAsyncThunk(
    "discipline/getDiscipline",
    async function(_,{ rejectWithValue}){
      try {
        const res = await requests.getDiscipline();
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

const disciplineSlice = createSlice({
    name: "discipline",
    initialState,
    status: null,
    statusById: null,
    error: null,
    deleteStatus:null,
    extraReducers: {
      [getDiscipline.pending]: (state) => {
        state.status = "loading";
        state.error = null;
      },
      [getDiscipline.fulfilled]: (state, action) => {
        state.status = "resolved";
        state.discipline = action.payload
        // console.log("fullfiled");
      },
      [getDiscipline.rejected]: (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      },
    },
  });
  
  // export const { application } = applicationSlice.actions;
  
  export default disciplineSlice.reducer;