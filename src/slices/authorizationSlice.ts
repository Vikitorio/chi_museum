import { createSlice } from "@reduxjs/toolkit";

export const authorizationSlice = createSlice({
    name: "authorization",
    initialState: {
        authorizated: Boolean(localStorage.getItem("token"))
    },

    reducers: {
        setAuthorizationStatus: (state, action) => {
            localStorage.setItem("token", action.payload);
            state.authorizated = action.payload;
        },
        logOut: (state) => {
            localStorage.removeItem("token");
            state.authorizated = false;
        }
    }

})
export const { setAuthorizationStatus , logOut} = authorizationSlice.actions;

export default authorizationSlice.reducer;