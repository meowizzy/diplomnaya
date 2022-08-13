import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { requests } from "../api";


const initialState = {
  athletes: [],
};

export const getAthletes = createAsyncThunk(
    'athletesSlice/getAthletes',
    async () => {
          const response = await requests.getAthletes();
        //   console.log("getAthletes: ", response.data)
          return response.data
        
        // data.navigate("/main/news/all_news")
        // setTimeout(() => data.handleOpenSuccessModal(), 1500)
        // data.handleOpenSuccessModal()
      }
  );
  const athletesSlice = createSlice({
      name: "athletesSlice",
      initialState,
      status: null,
      statusById: null,
      error: null,
      deleteStatus:null,
      extraReducers: {
        [getAthletes.pending]: (state) => {
          state.status = "loading";
          state.error = null;
        },
        [getAthletes.fulfilled]: (state, action) => {
          state.status = "resolved";
          state.athletes = action.payload
          // console.log("fullfiled");
        },
        [getAthletes.rejected]: (state, action) => {
          state.status = "rejected";
          state.error = action.payload;
        },
      },
    });
    
    // export const { application } = applicationSlice.actions;
    
    export default athletesSlice.reducer;