import { configureStore } from '@reduxjs/toolkit';
import authorizationReducer from "../slices/authorizationSlice";
import themeReducer from "../slices/themeSlice";
const store = configureStore({
    reducer: {
        authorization: authorizationReducer,
        theme: themeReducer
    },
})
export default store;
export type RootState = ReturnType<typeof store.getState>;