import authApi from "../../api/AuthApi";
import { useDispatch } from "react-redux";
import { setAuthorization, setUserId } from "../../slices/authorizationSlice";
import { useNavigate } from "react-router";

import LoginForm from "../../components/LoginForm/LoginForm";
const LoginPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const logIn = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const login = data.get("login");
        const password = data.get("password");
        if (typeof login !== "string" || typeof password !== "string") { return; }
        const response = await authApi.logIn({ "username": login, "password": password });
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