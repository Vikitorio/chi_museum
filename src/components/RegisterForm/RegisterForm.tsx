import { Button, Card, CardContent, CardHeader, TextField } from "@mui/material";
import { Formik, Form, type FormikHelpers } from "formik";
import { Link } from "react-router";
import * as Yup from "yup";

interface RegisterFormValues {
    username: string;
    password: string;
    confirmPassword: string;
}

interface RegisterFormProps {
    onSubmit: (data: RegisterFormValues) => void | Promise<void>;
}

const validationSchema = Yup.object({
    username: Yup.string()
        .min(4, "Too short (minimum 4 characters)")
        .required("Username is required"),
    password: Yup.string()
        .min(4, "Too short (minimum 4 characters)")
        .required("Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm your password"),
});

const RegisterForm = (props: RegisterFormProps) => {
    return (
        <Card>
            <CardContent>
                <CardHeader title="Create Account" />
                <Formik
                    initialValues={{ username: "", password: "", confirmPassword: "" }}
                    validationSchema={validationSchema}
                    onSubmit={(
                        values: RegisterFormValues,
                        { setSubmitting }: FormikHelpers<RegisterFormValues>
                    ) => {
                        void Promise.resolve(props.onSubmit(values)).finally(() => setSubmitting(false));
                    }}
                >
                    {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
                        <Form style={{ marginBottom: "20px" }}>
                            <TextField
                                name="username"
                                label="Username"
                                value={values.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                error={touched.username && Boolean(errors.username)}
                                helperText={touched.username && errors.username}
                                slotProps={{ formHelperText: { style: { color: "red" } } }}
                            />
                            <TextField
                                name="password"
                                label="Password"
                                type="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                error={touched.password && Boolean(errors.password)}
                                helperText={touched.password && errors.password}
                                slotProps={{ formHelperText: { style: { color: "red" } } }}
                            />
                            <TextField
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                value={values.confirmPassword}
                                onChange={handleChange}

                                margin="normal"
                                variant="outlined"
                                fullWidth
                                error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                                helperText={touched.confirmPassword && errors.confirmPassword}
                                slotProps={{ formHelperText: { style: { color: "red" } } }}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ marginTop: "20px" }}
                                disabled={isSubmitting}
                            >
                                Register
                            </Button>
                        </Form>
                    )}
                </Formik>
                <Link to="/login">Already have an account? Login</Link>
            </CardContent>
        </Card>
    );
};

export default RegisterForm;
