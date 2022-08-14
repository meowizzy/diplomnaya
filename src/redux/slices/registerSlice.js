import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { withoutToken } from "../api";

const initialState = {
  user: {},
};

export const postRegister = createAsyncThunk(
  "register/postRegister",
 
  async (formData ,{ rejectWithValue, dispatch }) => {
    // console.log("form", formData)
    try {
      const res = await withoutToken.register(formData.values);
      console.log("res", res)
      if (!res) {
        throw new Error("ERROR");
      }
      formData.navigate('/auth')
      // return res
    } catch (error) {
        return rejectWithValue(error.message)
    }
  }
);
export const createUser = createAsyncThunk(
  "register/createUser",
  async (formData ,{ rejectWithValue }) => {
    // console.log("form", formData)
    try {
      const res = await withoutToken.register(formData.values);
      console.log("res", res)
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
  reducers: {
    userRegister: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [postRegister.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [postRegister.fulfilled]: (state) => {
      state.status = "resolved";
      state.error = null
      console.log("fullfiled");
    },
    [postRegister.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { userRegister } = registerSlice.actions;

export default registerSlice.reducer;