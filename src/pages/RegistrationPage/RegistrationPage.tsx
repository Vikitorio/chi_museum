import { TextField, Button, Card, Link, CardHeader, CardContent } from "@mui/material";
import styles from "./styles.module.css";
const RegistrationPage = () => {
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