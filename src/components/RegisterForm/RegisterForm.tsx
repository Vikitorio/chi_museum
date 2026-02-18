import { Button, Card, CardContent, CardHeader, Link, TextField } from "@mui/material";

interface RegisterFormProps {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

const RegisterForm = (props: RegisterFormProps) => {
    return (
        <Card>
            <CardContent>
                <CardHeader title="Create account" />
                <form onSubmit={props.onSubmit}>
                    <TextField name="login" label="Username" margin="normal" variant="outlined" required fullWidth />
                    <TextField name="password" label="Password" margin="normal" variant="outlined" required fullWidth />
                    <Button variant="contained" type="submit" fullWidth>Submit</Button>
                </form>
                <Link>Have account? Login</Link>
            </CardContent>
        </Card>
    );

}

export default RegisterForm;