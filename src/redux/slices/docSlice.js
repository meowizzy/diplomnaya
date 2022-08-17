import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import {requests} from "../api";

const initialState = {
    loading: false,
    docs: [],
    doc: {},
}

export const getDocs = createAsyncThunk(
    'docs/getDocs',
    async () => {
        const response = await requests.getDocs();
        console.log("docs: ", response.data)
        return response.data;
    }
);

export const getDoc = createAsyncThunk(
    'docs/getDoc',
    async (id) => {
        const response = await requests.getDoc(id);
        console.log("doc: ", response.data)
        return response.data;
    }
);

export const createDoc = createAsyncThunk(
    'docs/createDoc',
    async (data) => {
        const response = await requests.postDoc(data);
        setTimeout(() => data.navigate("/main/documentation/all_documentation"), 1500)
        data.handleOpenSuccessModal()
        console.log("new_doc: ", response.data)
        return response.data;
    }
);

export const deleteDoc = createAsyncThunk(
    'docs/deleteDocs',
    async ({id, link}, {dispatch}) => {
        const response = await requests.deleteDoc(id);
        link()
        console.log("deleted_doc: ", response.data)
        return response.data;
    }
);

const docSlice = createSlice({
    name: 'docs',
    initialState,
    reducers: {
        postDoc: (state, {payload}) => {
            state.docs.push(payload)
        }
    },
    extraReducers: {
        [getDocs.pending]: (state) => {
            state.loading = true;
        },
        [getDocs.fulfilled]: (state, action) => {
            state.loading = false
            state.docs = action.payload
        },
        [getDocs.rejected]: (state) => {
            state.loading = false
        },
        [getDoc.pending]: (state) => {
            state.loading = true;
        },
        [getDoc.fulfilled]: (state, action) => {
            state.loading = false
            state.doc = action.payload
        },
        [getDoc.rejected]: (state) => {
            state.loading = false
        },
    },
})

export const docsSlice = docSlice.reducer;

