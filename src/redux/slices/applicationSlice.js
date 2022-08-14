import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { requests } from "../api";


const initialState = {
  application: [],
  applicationById:{},
  applicationTemplate:[],
  applicationTemplateId:{},
  currentApplication:[],
  historyApplication:[],
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
      console.log("byid",res.data)
      if (!res) {
        throw new Error("ERROR");
      }
      return res.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
  }
);

export const getCurrentApplication = createAsyncThunk(
  "application/getCurrentApplication",
  async function(data,{ rejectWithValue}){
    // console.log(data)
    try {
      const res = await requests.getCurrentApplication(data);
      // console.log("current",res.data)
      if (!res) {
        throw new Error("ERROR");
      }
      return res.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
  }
);
export const getHistoryApplication = createAsyncThunk(
  "application/getHistoryApplication",
  async function(data,{ rejectWithValue}){
    try {
      const res = await requests.getHistoryApplication(data);
      // console.log("history",res.data)
      if (!res) {
        throw new Error("ERROR");
      }
      return res.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
  }
);
export const editApplication = createAsyncThunk(
  'application/editApplication',
  async (data) => {
    console.log(data)
      if(data.state===false){
        const response = await requests.editApplicationById(data.values.choise);
        console.log("edit: ", response.data)
        return response.data
      }else{
        const response = await requests.editApplicationById(data.values.comment);
        console.log("edit: ", response.data)
        return response.data
      }
      // data.navigate("/main/news/all_news")
      // setTimeout(() => data.handleOpenSuccessModal(), 1500)
      // data.handleOpenSuccessModal()
    }
);

export const postApplicationTemplate = createAsyncThunk(
  'application/postApplicationTemplate',
  async (data) => {
    console.log(data)
        const response = await requests.postApplicationTemplate(data);
        console.log("post: ", response.data)
        return response.data
      
      // data.navigate("/main/news/all_news")
      // setTimeout(() => data.handleOpenSuccessModal(), 1500)
      // data.handleOpenSuccessModal()
    }
);

export const getApplicationTemplate = createAsyncThunk(
  "application/getApplicationTemplate",
  async function(_,{ rejectWithValue}){
    try {
      const res = await requests.getApplicationTemplate();
      // console.log(res.data)
      if (!res) {
        throw new Error("ERROR");
      }
      // console.log("template",res)
      return res.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
  }
);
export const getApplicationTemplateById = createAsyncThunk(
  "application/getApplicationTemplateById",
  async function(id,{ rejectWithValue}){
    try {
      const res = await requests.getApplicationTemplateById(id);
      // console.log(res.data)
      if (!res) {
        throw new Error("ERROR");
      }
      // console.log("template_id",res)
      return res.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
  }
);

export const deleteApplication = createAsyncThunk(
  "application/deleteApplication",
  async function(id,{ rejectWithValue}){
    try {
      const res = await requests.deleteApplicationById(id);
      // console.log("delete",res.data)
      if (!res) {
        throw new Error("ERROR");
      }
      // console.log("template_id",res)
      return id
    } catch (error) {
        return rejectWithValue(error.message)
    }
  }
);

export const postApplication = createAsyncThunk(
  'application/postApplication',
  async (data) => {
        console.log(data)
        const response = await requests.postApplication(data.values);
        console.log("post: ", response.data)
        data.handleOpenSuccessModal()
        return response.data
      
      // data.navigate("/main/news/all_news")
      // setTimeout(() => data.handleOpenSuccessModal(), 1500)
    }
);

const applicationSlice = createSlice({
    name: "application",
    initialState,
    status: null,
    statusById: null,
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
        state.statusById = "loading";
        state.error = null;
      },
      [getApplicationById.fulfilled]: (state, action) => {
        state.statusById = "resolved";
        state.applicationById = action.payload
        // console.log("fullfiled");
      },
      [getApplicationById.rejected]: (state, action) => {
        state.statusById = "rejected";
        state.error = action.payload;
      },
      [getApplicationTemplate.pending]: (state) => {
        state.statusById = "loading";
        state.error = null;
      },
      [getApplicationTemplate.fulfilled]: (state, action) => {
        state.statusById = "resolved";
        state.applicationTemplate = action.payload
        // console.log("fullfiled");
      },
      [getApplicationTemplate.rejected]: (state, action) => {
        state.statusById = "rejected";
        state.error = action.payload;
      },
      [getApplicationTemplateById.pending]: (state) => {
        state.statusById = "loading";
        state.error = null;
      },
      [getApplicationTemplateById.fulfilled]: (state, action) => {
        state.statusById = "resolved";
        state.applicationTemplateId = action.payload
        // console.log("fullfiled");
      },
      [getApplicationTemplateById.rejected]: (state, action) => {
        state.statusById = "rejected";
        state.error = action.payload;
      },
      [getCurrentApplication.pending]: (state) => {
        state.statusById = "loading";
        state.error = null;
      },
      [getCurrentApplication.fulfilled]: (state, action) => {
        state.statusById = "resolved";
        state.currentApplication = action.payload
        // console.log("fullfiled");
      },
      [getCurrentApplication.rejected]: (state, action) => {
        state.statusById = "rejected";
        state.error = action.payload;
      },
      [getHistoryApplication.pending]: (state) => {
        state.statusById = "loading";
        state.error = null;
      },
      [getHistoryApplication.fulfilled]: (state, action) => {
        state.statusById = "resolved";
        state.historyApplication = action.payload
        // console.log("fullfiled");
      },
      [getHistoryApplication.rejected]: (state, action) => {
        state.statusById = "rejected";
        state.error = action.payload;
      },
      [deleteApplication.fulfilled]: (state, action) => {
        state.statusById = "resolved";
        state.currentApplication = state.currentApplication.filter(el=>(
          el.id!==action.payload
        ))
        // console.log("fullfiled");
      },
    },
  });
  
  // export const { application } = applicationSlice.actions;
  
  export default applicationSlice.reducer;