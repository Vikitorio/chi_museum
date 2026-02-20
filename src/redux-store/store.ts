import { configureStore } from "@reduxjs/toolkit";
import authorizationReducer from "../slices/authorizationSlice";
const store = configureStore({
  reducer: {
    authorization: authorizationReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
