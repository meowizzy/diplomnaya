import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    error: null,
};

const productReleases = createSlice({
    name: 'productReleases',
    initialState,
    reducers: {
        productReleasesFetching: (state) => {
            state.fetchingState = 'requesting';
        },
},
});

const { actions, reducer } = productReleases;

export const {
    productReleasesFetched, productReleasesFetching,
} = actions;

export default reducer;