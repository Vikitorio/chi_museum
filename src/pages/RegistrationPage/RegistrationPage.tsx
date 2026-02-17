import { TextField, Button, Card, Link, CardHeader, CardContent } from "@mui/material";
import { useNavigate } from "react-router";
import styles from "./styles.module.css";
import userApi from "../../api/UserApi";
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
        <Card>
            <CardContent>
                <CardHeader title="Create account" />
                <form className={styles.form} onSubmit={createUser}>
                    <TextField name="login" label="Username" margin="normal" variant="outlined" required fullWidth />
                    <TextField name="password" label="Password" margin="normal" variant="outlined" required fullWidth />
                    <Button variant="contained" type="submit" className={styles.formSubmit} fullWidth>Submit</Button>
                </form>
                <Link>Have account? Login</Link>
            </CardContent>
        </Card>
    );

}

export default RegistrationPage;