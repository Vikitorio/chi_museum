import { TextField, Button, Card, CardContent, CardHeader, Link } from "@mui/material";
import authApi from "../../api/AuthApi";
import { useDispatch } from "react-redux";
import { setAuthorization, setUserId } from "../../slices/authorizationSlice";
import { useNavigate } from "react-router";

import styles from "./styles.module.css";
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
        <Card>
            <CardContent>
                <CardHeader title="Authorization" />
                <form className={styles.form} onSubmit={logIn}>
                    <TextField name="login" margin="normal" label="Login" variant="outlined" required fullWidth />
                    <TextField name="password" margin="normal" label="Password" variant="outlined" required fullWidth />

                    <Button fullWidth className={styles.formSubmit} variant="contained" type="submit">Submit</Button>
                </form>
                <Link>Don`t have account? Registration</Link>
            </CardContent>
        </Card>
    );

}

export default LoginPage;