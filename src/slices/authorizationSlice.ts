import { createSlice } from "@reduxjs/toolkit";

interface AuthorizationState {
    authorizated: boolean;
    userId: number | null;
}

const initialState: AuthorizationState = {
    authorizated: Boolean(localStorage.getItem("token")),
    userId: localStorage.getItem("userId")
        ? Number(localStorage.getItem("userId"))
        : null
};

export const authorizationSlice = createSlice({
    name: "authorization",
    initialState,
    reducers: {
        setAuthorization: (state, action) => {
            localStorage.setItem("token", action.payload);
            state.authorizated = true;
        },
        setUserId: (state, action) => {
            localStorage.setItem("userId", action.payload);
            state.userId = action.payload;
        },
        logOut: (state) => {
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            state.userId = null;
            state.authorizated = false;
        }
    }

})
export const { setAuthorization, setUserId, logOut } = authorizationSlice.actions;

export default authorizationSlice.reducer;