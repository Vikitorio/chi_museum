import { useNavigate } from "react-router";
import userApi from "../../api/UserApi";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
const RegistrationPage = () => {
    const navigate = useNavigate()
    const createUser = async (data: {username:string, password:string}) => {
        const response = await userApi.userRegister({ "username": data.username, "password": data.password });
        if (response.status == 201) {
            navigate("/login");
        }
    }
    return (
        <RegisterForm onSubmit={createUser}/>
    );

}

export default RegistrationPage;