import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {requests} from "../api";
import {setCookie} from "../../utils/cookieFunction/cookieFunction";

const initialState = {
    error: false,
};

export const userAuth = createAsyncThunk(
    'auth/userAuth',
    async (data) => {
        const res = await requests.authApi(data.authData);
        console.log(res);
        setCookie("user_info", JSON.stringify(res.data), 100);
        data.navigate("/main/defaultEvents/allDefaultEvents");
        return res.data;
    }
);

export const auth = async (data, navigate) => {
    const res = await requests.authApi(data);
    console.log(res);
    setCookie("user_info", JSON.stringify(res.data), 100);
    navigate("/main/defaultEvents/allDefaultEvents");
}

export const resetPassword = async (data) => {
    const res = await requests.resetPasswordApi(data);
    console.log(res);
}

export const feedBack = async (data) => {
    const res = await requests.feedbackApi(data);
    console.log(res);
}

export const newPassword = async (data) => {
    const res = await requests.newPasswordApi(data);
    console.log(res);
}

const authSlice = createSlice({
    name: 'productReleases',
    initialState,
    reducers: {
        productReleasesFetching: (state) => {
            state.fetchingState = 'requesting';
        },
    },
    extraReducers: {
        [userAuth.pending]: (state) => {
            state.error = false;
        },
        [userAuth.fulfilled]: (state) => {
            state.error = false;
        },
        [userAuth.rejected]: (state) => {
            state.error = true;
        },
    },
});

export const authSlices = authSlice.reducer;


