import {
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
} from "@mui/material";
import { Formik, Form, type FormikHelpers } from "formik";
import { Link } from "react-router";
import * as Yup from "yup";

interface LoginFormValues {
  username: string;
  password: string;
}

interface LoginFormProps {
  onSubmit: (data: LoginFormValues) => void | Promise<void>;
}
const validationSchema = Yup.object({
  username: Yup.string()
    .min(4, "Too short(minimum 4 symbols)")
    .required("Username is required"),
  password: Yup.string()
    .min(4, "Too short(minimum 4 symbols)")
    .required("Password is required"),
});

const LoginForm = (props: LoginFormProps) => {
  return (
    <Card>
      <CardContent>
        <CardHeader title="Authorization" />
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(
            values: LoginFormValues,
            { setSubmitting }: FormikHelpers<LoginFormValues>,
          ) => {
            void Promise.resolve(props.onSubmit(values)).finally(() =>
              setSubmitting(false),
            );
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isSubmitting,
          }) => (
            <Form style={{ marginBottom: "20px" }}>
              <TextField
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                margin="normal"
                label="Username"
                variant="outlined"
                fullWidth
                error={touched.username && Boolean(errors.username)}
                helperText={touched.username && errors.username}
                slotProps={{
                  formHelperText: { style: { color: "red" } },
                }}
              />
              <TextField
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                margin="normal"
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                slotProps={{
                  formHelperText: { style: { color: "red" } },
                }}
              />
              <Button
                fullWidth
                variant="contained"
                sx={{ marginTop: "20px" }}
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
        <Link to="/registration">Don't have an account? Register</Link>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
