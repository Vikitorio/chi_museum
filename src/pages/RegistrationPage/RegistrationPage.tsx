import { useNavigate } from "react-router";
import userApi from "../../api/UserApi";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
const RegistrationPage = () => {
    const navigate = useNavigate()
    const createUser = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const login = data.get("login");
        const password = data.get("password");
        if (typeof login !== "string" || typeof password !== "string") { return; }
        const response = await userApi.userRegister({ "username": login, "password": password });
        if (response.status == 201) {
            navigate("/login");
        }
    }
    return (
        <RegisterForm onSubmit={createUser}/>
    );

}

export default RegistrationPage;