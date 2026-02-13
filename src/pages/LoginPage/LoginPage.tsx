import { TextField, Button, Card, CardContent, CardHeader, Link } from "@mui/material";
import authApi from "../../api/AuthApi";
import styles from "./styles.module.css";
const LoginPage = () => {
    const logIn = () => {
        authApi.logIn({
            "username": "username123",
            "password": "password123"

        });
    }
    return (
        <Card>
            <CardContent>
                <CardHeader title="Authorization" />
                <form className={styles.form} onSubmit={(event) => { event.target.preventDefault() }}>
                    <TextField margin="normal" label="Login" variant="outlined" required fullWidth />
                    <TextField margin="normal" label="Password" variant="outlined" required fullWidth />

                    <Button fullWidth className={styles.formSubmit} variant="contained" onClick={logIn}>Submit</Button>
                </form>
                <Link>Don`t have account? Registration</Link>
            </CardContent>
        </Card>
    );

}

export default LoginPage;