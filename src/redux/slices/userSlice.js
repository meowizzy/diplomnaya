import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { requests } from "../api";


const initialState = {
  userJudge:[],
  userSecretary:[]
};

export const getJudgeUser = createAsyncThunk(
  "user/getJudgeUser",
  async function(_,{ rejectWithValue}){
    try {
      const res = await requests.getJudgeUser();
    //   console.log(res.data)
      if (!res) {
        throw new Error("ERROR");
      }
      return res.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
  }
);

export const getSecretaryUser = createAsyncThunk(
    "user/getSecretaryUser",
    async function(_,{ rejectWithValue}){
      try {
        const res = await requests.getSecretaryUser();
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
const userSlice = createSlice({
    name: "user",
    initialState,
    status: null,
    error: null,
    // reducers: {
    //   getUser: (state, action) => {
    //     state.event = action.payload;
    //   },
    // },
    extraReducers: {
      [getJudgeUser.pending]: (state) => {
        state.status = "loading";
        state.error = null;
      },
      [getJudgeUser.fulfilled]: (state, action) => {
        state.status = "resolved";
        state.userJudge = action.payload
        // console.log("fullfiled");
      },
      [getJudgeUser.rejected]: (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      },
      [getSecretaryUser.pending]: (state) => {
        state.status = "loading";
        state.error = null;
      },
      [getSecretaryUser.fulfilled]: (state, action) => {
        state.status = "resolved";
        state.userSecretary = action.payload
        // console.log("fullfiled");
      },
      [getSecretaryUser.rejected]: (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      },

    },
  });
  
  export const { user } = userSlice.actions;
  
  export default userSlice.reducer;