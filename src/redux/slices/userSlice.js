import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { requests } from "../api";


const initialState = {
  userJudge:[],
  userSecretary:[],
  user:{},
  allUser:[],
  userId:{},
  userTrainer: [],
  feedBackUsers:[],
  feedBackUser:{},
  // userSecretary:[],
};


export const getAllUser = createAsyncThunk(
  "user/getAllUser",
  async function(_,{ rejectWithValue}){
    try {
      const res = await requests.getAllUser();
      // console.log("user", res.data)
      if (!res) {
        throw new Error("ERROR");
      }
      return res.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
  }
);

export const getRequestToRegiter = createAsyncThunk(
  "user/getRequestToRegiter",
  async function(_,{ rejectWithValue}){
    try {
      const res = await requests.getNotRegisterUser();
      // console.log("user", res.data)
      if (!res) {
        throw new Error("ERROR");
      }
      return res.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
  }
);

export const getUserById = createAsyncThunk(
  "user/getUserById",
  async function(id,{ rejectWithValue}){
    try {
      const res = await requests.getUserById(id);
      // console.log("userId", res.data)
      if (!res) {
        throw new Error("ERROR");
      }
      return res.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
  }
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async function(id,{ rejectWithValue}){
    try {
      const res = await requests.deleteUser(id);
      // console.log("userDelete", res.data)
      if (!res) {
        throw new Error("ERROR");
      }
      return res.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
  }
);


export const getUserForProfilePage = createAsyncThunk(
  "user/getUserForProfilePage",
  async function(_,{ rejectWithValue}){
    const userId = localStorage.getItem('userId')
    try {
      const res = await requests.getUserForProfile(userId);
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
  export const editUser = createAsyncThunk(
    'user/editUser',
    async (data) => {
          // console.log(data)
          const response = await requests.editUser(data);
          // console.log("edit: ", response.data)
          // setTimeout(() => data.handleOpenSuccessModal(), 1500)
          data.handleOpenSuccessModal()
          data.navigate("/main/users/registered")
          return response.data
        // data.navigate("/main/news/all_news")
      }
  );


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
  // export const getTrenaireUser = createAsyncThunk(
  //   "user/getSecretaryUser",
  //   async function(_,{ rejectWithValue}){
  //     try {
  //       const res = await requests.getSecretaryUser();
  //       // console.log(res.data)
  //       if (!res) {
  //         throw new Error("ERROR");
  //       }
  //       return res.data
  //     } catch (error) {
  //         return rejectWithValue(error.message)
  //     }
  //   }
  // );

export const getTrainerUser = createAsyncThunk(
    "user/getTrainerUser",
    async function(_,{ rejectWithValue}){
        try {
            const res = await requests.getTrainerUser();
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

export const getFeedback = createAsyncThunk(
  "user/getFeedback",
  async function(_,{ rejectWithValue}){
      try {
          const res = await requests.getFeedback();
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

export const getFeedbackById = createAsyncThunk(
  "user/getFeedbackById",
  async function(id,{ rejectWithValue}){
      try {
          const res = await requests.getFeedbackById(id);
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
      state.userJudge = action.payload;
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
      state.userSecretary = action.payload;
      // console.log("fullfiled");
    },
    [getSecretaryUser.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },

    [getUserForProfilePage.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [getUserForProfilePage.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.user = action.payload;
      // console.log("fullfiled");
    },
    [getUserForProfilePage.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [getAllUser.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [getAllUser.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.allUser = action.payload;
      // console.log("fullfiled");
    },
    [getAllUser.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [getUserById.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [getUserById.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.userId = action.payload;
      // console.log("fullfiled");
    },
    [getUserById.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [getTrainerUser.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [getTrainerUser.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.userTrainer = action.payload;
    },
    [getTrainerUser.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.allUser = state.allUser.filter((el) => el.id !== action.payload);
    },
    [getRequestToRegiter.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [getRequestToRegiter.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.allUser = action.payload
      // console.log("fullfiled");
    },
    [getRequestToRegiter.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [getFeedback.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.feedBackUsers = action.payload
      // console.log("fullfiled");
    },
    [getFeedbackById.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.feedBackUser = action.payload
      // console.log("fullfiled");
    },
  },
});
  
  export const { user } = userSlice.actions;
  
  export default userSlice.reducer;