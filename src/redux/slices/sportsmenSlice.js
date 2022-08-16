import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import {requests} from "../api";

const initialState = {
    loading: false,
    sportsmen: [],
    sportsman: {},
}

export const getSportsmen = createAsyncThunk(
    'sportsmen/getSportsmen',
    async () => {
        const response = await requests.getSportsmenApi();
        console.log("sportsmen: ", response.data)
        return response.data;
    }
);

export const getSportsman = createAsyncThunk(
    'sportsmen/getSportsman',
    async (id) => {
        const response = await requests.getSportsmanApi(id);
        console.log("sportsman: ", response.data)
        return response.data;
    }
);

export const createSportsman = createAsyncThunk(
    'sportsmen/createSportsman',
    async (data) => {
        const response = await requests.postSportsmenApi(data);
        console.log("new_sportsman: ", response.data)
        setTimeout(() => data.navigate("/main/clubs/sportsmen"), 1000)
        data.handleOpenSuccessModal()
        return response.data;
    }
);

export const editSportsman = createAsyncThunk(
    'sportsmen/editSportsman',
    async (data) => {
        const response = await requests.editSportsmenApi(data);
        console.log("edited_sportsman: ", response.data)
        setTimeout(() => data.navigate("/main/clubs/sportsmen"), 1000)
        data.handleOpenSuccessModal()
        return response.data;
    }
);

export const deleteSportsman = createAsyncThunk(
    'sportsmen/deleteSportsman',
    async (id) => {
        const response = await requests.deleteSportsmenApi(id);
        console.log("deleted_sportsman: ", response.data)
        return response.data;
    }
);

const sportsmenSlice = createSlice({
    name: 'sportsmen',
    initialState,
    reducers: {
        postDoc: (state, {payload}) => {
            state.docs.push(payload)
        }
    },
    extraReducers: {
        [getSportsmen.pending]: (state) => {
            state.loading = true;
        },
        [getSportsmen.fulfilled]: (state, action) => {
            state.loading = false
            state.sportsmen = action.payload
        },
        [getSportsmen.rejected]: (state) => {
            state.loading = false
        },
        [getSportsman.pending]: (state) => {
            state.loading = true;
        },
        [getSportsman.fulfilled]: (state, action) => {
            state.loading = false
            state.sportsman = action.payload
        },
        [getSportsman.rejected]: (state) => {
            state.loading = false
        },
    },
})

export const sportsmanSlice = sportsmenSlice.reducer;

