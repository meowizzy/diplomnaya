import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import {requests} from "../api";

const initialState = {
    loading: false,
    protocols: [],
    protocol: {},
    judges: []
}

export const getProtocol = createAsyncThunk(
    'protocol/getProtocol',
    async () => {
        const response = await requests.getProtocolApi();
        console.log("protocols_apiiii: ", response.data)
        return response.data;
    }
);

export const getProtocolById = createAsyncThunk(
    'protocol/getProtocolById',
    async (id) => {
        const response = await requests.getProtocolByIdApi(id);
        console.log("protocol_api_response: ", response.data)
        return response.data;
    }
);

export const formProtocol = createAsyncThunk(
    'protocol/formProtocol',
    async (data) => {
        const response = await requests.formProtocolApi(data.data);
        data.navlink();
        console.log("formed_protocol: ", response.data)
        return response.data;
    }
);

export const createProtocol = createAsyncThunk(
    'protocol/createProtocol',
    async (id, {dispatch}) => {
        const response = await requests.postProtocolApi(id);
        console.log("new_protocol: ", response.data)
        return response.data;
    }
);

export const confirmProtocol = createAsyncThunk(
    'protocol/confirmProtocol',
    async (data) => {
        const response = await requests.confirmProtocolApi(data);
        data.navlink();
        console.log("is_confirmed_protocol: ", response.data);
        return response.data;
    }
);

export const reasonOfRejectionProtocol = createAsyncThunk(
    'protocol/reasonOfRejectionProtocol',
    async (data) => {
        const response = await requests.reasonOfRejectionProtocolApi(data);
        data.navlink();
        console.log("reason_protocol_result: ", response.data);
        return response.data;
    }
);

export const createJudge = createAsyncThunk(
    'protocol/reasonOfRejectionProtocol',
    async (data) => {
        const response = await requests.postJudgeApi(data);
        setTimeout(() => data.navlink(), 1500)
        data.handleOpenSuccessModal()
        console.log("new_judge: ", response.data);
        return response.data;
    }
);

export const getJudge = createAsyncThunk(
    'protocol/reasonOfRejectionProtocol',
    async () => {
        const response = await requests.getJudgeApi();
        console.log("judge_list_api: ", response.data);
        return response.data;
    }
);

const protocolSlice = createSlice({
    name: 'protocol',
    initialState,
    reducers: {
        getProtocols: (state, {payload}) => {
            state.protocols.push(payload)
        }
    },
    extraReducers: {
        [getProtocolById.pending]: (state) => {
            state.loading = true;
        },
        [getProtocolById.fulfilled]: (state, action) => {
            state.loading = false
            state.protocol = action.payload
        },
        [getProtocolById.rejected]: (state) => {
            state.loading = false
        },
        [getProtocol.pending]: (state) => {
            state.loading = true;
        },
        [getProtocol.fulfilled]: (state, action) => {
            state.loading = false
            state.protocols = action.payload
        },
        [getProtocol.rejected]: (state) => {
            state.loading = false
        },
        [getJudge.pending]: (state) => {
            state.loading = true;
        },
        [getJudge.fulfilled]: (state, action) => {
            state.loading = false
            state.judges = action.payload
        },
        [getJudge.rejected]: (state) => {
            state.loading = false
        },
    },
})

export const protocolsSlice = protocolSlice.reducer;

