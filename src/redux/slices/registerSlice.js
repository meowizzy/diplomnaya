import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { requests } from "../api";

const initialState = {
  user: {},
};

export const postRegister = createAsyncThunk(
  "register/postRegister",
 
  async (formData, { rejectWithValue, dispatch }) => {
    console.log("form", formData)
    // dispatch(userRegister(res.formData));
    try {
    //   body:JSON.stringify(formData)
      const res = await requests.register(formData);
      if (!res.ok) {
        throw new Error("Server Error!");
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
      state.error = null;
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

// export const register = (formData) => {
//     console.log("в экшыне",formData)
//       return async (dispatch) => {
//         return axios(API_POST_REGISTER_STAFF, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           data: JSON.stringify(formData),
//         })
//           .then(() => {
//             dispatch({ type: REGISTER, payload: formData });
//           })
//           .catch((err) =>
//             dispatch({ type: REGISTER_FAILURE, payload: err.response.data })
//           );
//       };
//     };
