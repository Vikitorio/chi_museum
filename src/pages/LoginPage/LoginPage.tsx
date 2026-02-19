import authApi from "../../api/AuthApi";
import { useDispatch } from "react-redux";
import { setAuthorization, setUserId } from "../../slices/authorizationSlice";
import { useNavigate } from "react-router";

import LoginForm from "../../components/LoginForm/LoginForm";
const LoginPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const logIn = async (data: { username: string, password: string }) => {
        const response = await authApi.logIn({ "username": data.username, "password": data.password });
        if (response.access_token) {
            dispatch(setAuthorization(response.access_token));
            dispatch(setUserId(response.userId));
            navigate("/");
        }
    }
    return (
        <LoginForm onSubmit={logIn} />
    );

}

export default LoginPage;