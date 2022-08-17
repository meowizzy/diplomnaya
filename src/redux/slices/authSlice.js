import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {requests} from "../api";
import {getCookie, setCookie} from "../../utils/cookieFunction/cookieFunction";

const initialState = {
    error: false,
};
const role = JSON.parse(getCookie("user_info"))

export const userAuth = createAsyncThunk(
    'auth/userAuth',
    async (data) => {
        const res = await requests.authApi(data.authData);
        console.log(res);
        setCookie("user_info", JSON.stringify(res.data), 100);
        localStorage.setItem('userId', res.data.user_id)
        if(role.assistant === "True"){
            data.navigate('/main/events/allEvents')
        }else{
            data.navigate("/main/defaultEvents/allDefaultEvents");
        }
        return res.data;
    }
);

export const auth = async (data, navigate) => {
    const res = await requests.authApi(data);
    console.log(res);
    setCookie("user_info", JSON.stringify(res.data), 100);
    if(role.assistant === "True"){
        navigate('/main/events/allEvents')
    }else{
        navigate("/main/defaultEvents/allDefaultEvents");
    }
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
        [userAuth.fulfilled]: (state, action) => {
            state.error = false;
        },
        [userAuth.rejected]: (state) => {
            state.error = true;
        },
    },
});

export const authSlices = authSlice.reducer;


