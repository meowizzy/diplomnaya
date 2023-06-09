import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { requests } from "../api";


const initialState = {
  event: [],
  event_id:{},
  error:{}
};

export const getEvent = createAsyncThunk(
  "event/getEvent",
  async function(_,{ rejectWithValue}){
    try {
      const res = await requests.getEvents();
      // console.log(res)
      if (!res) {
        throw new Error("ERROR");
      }
      return res.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
  }
);

export const getEventById = createAsyncThunk(
    "event/getEventById",
    async function(id,{ rejectWithValue}){
        try {
            const res = await requests.getEvent(id);
            console.log("evtn: ", res.data)
            if (!res) {
                throw new Error("ERROR");
            }
            return res.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

export const createEvent = createAsyncThunk(
  "event/createEvent",
  async (data ,{ rejectWithValue }) => {
    console.log("form", data)
    try {
      const res = await requests.postEvents(data.values);
      data.handleOpenSuccessModal()
      setTimeout(() => {
        data.navigate('/main/events/allEvents')
      }, 1500)

      return res.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
  }
);
export const editEvent = createAsyncThunk(
  'user/editEvent',
  async (data, {dispatch}) => {
        // console.log(data)
        const response = await requests.editEvents(data);
        data.handleOpenSuccessModal()
        setTimeout(() => {
          data.handleCloseSuccessModal()
        }, 1500)
        dispatch(getEvent())
        data.navigate("/main/events/allEvents")
        // console.log("edit: ", response.data)
        // setTimeout(() => data.handleOpenSuccessModal(), 1500)
        data.onClick()
        return response.data
      // data.navigate("/main/news/all_news")
    }
);

export const deleteEvent = createAsyncThunk(
  "event/deleteEvent",
 
  async ({id, setModalActive} ,{ rejectWithValue }) => {
    console.log("form", id)
    try {
      const res = await requests.deleteEvents(id);
      setModalActive(false)
      console.log("res", res)
      // if (!res) {
      //   throw new Error("ERROR");
      // }
      return id
    } catch (error) {
        return rejectWithValue(error.message)
    }
  }
);

const eventSlice = createSlice({
  name: "event",
  initialState,
  status: null,
  error: null,
  deleteStatus:null,
  reducers: {
    getEvent: (state, action) => {
      state.event = action.payload;
    },
  },
  extraReducers: {
    [getEvent.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [getEvent.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.event = action.payload
      // console.log("fullfiled");
    },
    [getEvent.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
      [getEventById.pending]: (state) => {
          state.status = "loading";
          state.error = null;
      },
      [getEventById.fulfilled]: (state, action) => {
          state.status = "resolved";
          state.event_id = action.payload
          // console.log("fullfiled");
      },
      [getEventById.rejected]: (state, action) => {
          state.status = "rejected";
          state.error = action.payload;
      },
    [deleteEvent.rejected]: (state, action) => {
      state.deleteStatus = "rejected";
      state.error = action.payload;
    },
    [deleteEvent.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.event = state.event.filter(el=>(
        el.id!==action.payload
      ))
      // console.log("fullfiled");
    }, 
  },
});

// export const { event } = eventSlice.actions;

export default eventSlice.reducer;