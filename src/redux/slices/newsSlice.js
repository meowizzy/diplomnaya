import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {requests} from "../api";

const initialState = {
    loading: false,
    news: [],
    new: {},
}

export const getNews = createAsyncThunk(
    'news/getNews',
    async () => {
        const response = await requests.getNewsApi();
        console.log("news: ", response.data)
        return response.data;
    }
);

export const getNew = createAsyncThunk(
    'news/getNew',
    async (id) => {
        const response = await requests.getNewApi(id);
        console.log("new: ", response.data)
        return response.data;
    }
);

export const createNew = createAsyncThunk(
    'news/createNews',
    async (data) => {
        const response = await requests.createNewsApi(data);
        console.log("new_new: ", response.data)
        // dispatch(postMessage(response.data))
        return response.data;
    }
);

export const editNews = createAsyncThunk(
    'news/editNews',
    async (data) => {
        const response = await requests.editNewsApi(data);
        console.log("edited_new: ", response.data)
        data.navigate("/main/news/all_news")
        setTimeout(() => data.handleOpenSuccessModal(), 1500)
        data.handleOpenSuccessModal()
        return response.data;
    }
);

export const deleteNew = createAsyncThunk(
    'news/deleteNews',
    async (data) => {
        const response = await requests.deleteNewsApi(data.id);
        data.close_modal();
        window.location.reload();
        console.log("deleted_new: ", response.data)
        return response.data;
    }
);

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        deleteNew: (state, {payload}) => {
            state.docs.push(payload)
        }
    },
    extraReducers: {
        [getNews.pending]: (state) => {
            state.loading = true;
        },
        [getNews.fulfilled]: (state, action) => {
            state.loading = false
            state.news = action.payload
        },
        [getNews.rejected]: (state) => {
            state.loading = false
        },
        [getNew.pending]: (state) => {
            state.loading = true;
        },
        [getNew.fulfilled]: (state, action) => {
            state.loading = false
            state.new = action.payload
        },
        [getNew.rejected]: (state) => {
            state.loading = false
        },
    },
})

// export const { docs } = docSlice.actions;
export const newSlice = newsSlice.reducer;

