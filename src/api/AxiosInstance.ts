import axios from "axios";
import store from "../redux-store/store";
import { logOut } from "../slices/authorizationSlice";

const AxiosInstance = axios.create({ baseURL: "https://playground.zenberry.one/" });
AxiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;

    }
    return config;
},
    (error) => {
        return Promise.reject(error);

    })

AxiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            store.dispatch(logOut());
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

export default AxiosInstance;