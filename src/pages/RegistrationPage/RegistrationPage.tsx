import { TextField, Button, Card, Link, CardHeader, CardContent } from "@mui/material";
import authApi from "../../api/AuthApi";
import { useDispatch } from "react-redux";
import { setAuthorizationStatus } from "../../slices/authorizationSlice";
import { useNavigate } from "react-router";
import styles from "./styles.module.css";
const RegistrationPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const logIn = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const login = data.get("login");
        const password = data.get("password");
        const response = await authApi.logIn({ "username": login, "password": password });
        if (response.access_token) {
            dispatch(setAuthorizationStatus(true));
            localStorage.setItem("token", response.access_token);
            navigate("/");
        }
    }
    return (
        <Card>
            <CardContent>
                <CardHeader title="Create account" />
                <form className={styles.form} onSubmit={(event) => { event.target.preventDefault() }}>
                    <TextField label="Username" margin="normal" variant="outlined" required fullWidth />
                    <TextField label="Password" margin="normal" variant="outlined" required fullWidth />
                    <Button variant="contained" type="submit" className={styles.formSubmit} fullWidth>Submit</Button>
                </form>
                <Link>Have account? Login</Link>
            </CardContent>
        </Card>
    );

}

export default RegistrationPage;