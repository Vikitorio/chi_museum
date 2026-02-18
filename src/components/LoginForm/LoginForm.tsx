import { Button, Card, CardContent, CardHeader, TextField } from "@mui/material";
import { Link } from "react-router";

interface LoginFormProps {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

const LoginForm = (props: LoginFormProps) => {
    return (<Card>
        <CardContent>
            <CardHeader title="Authorization" />
            <form onSubmit={props.onSubmit} style={{ marginBottom: "20px" }}>
                <TextField name="login" margin="normal" label="Login" variant="outlined" required fullWidth />
                <TextField name="password" margin="normal" label="Password" variant="outlined" required fullWidth />

                <Button fullWidth variant="contained" sx={{ marginTop: "20px" }} type="submit">Submit</Button>
            </form>
            <Link to="/registration">Don`t have account? Registration</Link>
        </CardContent>
    </Card>);

}

export default LoginForm;