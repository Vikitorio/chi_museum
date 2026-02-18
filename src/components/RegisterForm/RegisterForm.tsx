import { Button, Card, CardContent, CardHeader, TextField } from "@mui/material";
import { Link } from "react-router";

interface RegisterFormProps {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

const RegisterForm = (props: RegisterFormProps) => {
    return (
        <Card>
            <CardContent>
                <CardHeader title="Create account" />
                <form onSubmit={props.onSubmit} style={{ marginBottom: "20px" }}>
                    <TextField name="login" label="Username" margin="normal" variant="outlined" required fullWidth />
                    <TextField name="password" label="Password" margin="normal" variant="outlined" required fullWidth />
                    <Button variant="contained" type="submit" fullWidth sx={{ marginTop: "20px" }}>Submit</Button>
                </form>
                <Link to="/login">Have account? Login</Link>
            </CardContent>
        </Card>
    );

}

export default RegisterForm;