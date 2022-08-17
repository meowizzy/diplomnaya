import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { requests, withoutToken } from "../api";

const initialState = {
  userId: {},
};

export const postRegister = createAsyncThunk(
  "register/postRegister",
 
  async (formData ,{rejectWithValue}) => {
    // console.log("form", formData)
    try {
      const res = await withoutToken.register(formData.values);
      // console.log("register", res.data)
      if (!res) {
        throw new Error("ERROR");
      }
      setTimeout(() => formData.setUserId("/main/clubs/all_clubs"), 1500)
      formData.navigate('/auth')
      return res.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
  }
);
export const postUserClub = createAsyncThunk(
  "register/postUserClub",
 
  async (formData ,{rejectWithValue}) => {
    // console.log("formUser", formData)
    try {
      const res = await requests.postUserClub(formData);
      console.log("register", res.data)
      if (!res) {
        throw new Error("ERROR");
      }
      return res.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
  }
);

export const createUser = createAsyncThunk(
  "register/createUser",
  async (formData ,{ rejectWithValue }) => {
    console.log("form", formData)
    try {
      const res = await withoutToken.register(formData.role);
      // console.log("res", res)
      if (!res) {
        throw new Error("ERROR");
      }
      formData.handleOpenSuccessModal()
      // return res
    } catch (error) {
        return rejectWithValue(error.message)
    }
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState,
  status: null,
  error: null,
  extraReducers: {
    [postRegister.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [postRegister.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.userId = action.payload
      // console.log("fullfiled");
    },
    [postRegister.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { userRegister } = registerSlice.actions;

export default registerSlice.reducer;