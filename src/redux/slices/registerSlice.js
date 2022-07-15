import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { withoutToken } from "../api";

const initialState = {
  user: {},
  error:{}
};

export const postRegister = createAsyncThunk(
  "register/postRegister",
 
  async (formData, { rejectWithValue, dispatch }) => {
    console.log("form", formData)
    // dispatch(userRegister(res.formData));
    try {
    //   body:JSON.stringify(formData)
      const res = await withoutToken.register(formData);
      if (!res.ok) {
        throw new Error("ERROR");
      }
      
      const data = await res.json();
      console.log(data)
      return data
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
      // state.error = null;
    },
    [postRegister.fulfilled]: (state) => {
      state.status = "resolved";
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