import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  styled,
  TextField,
  FormHelperText,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Formik, Form, type FormikHelpers } from "formik";
import * as Yup from "yup";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

interface NewPostValues {
  description: string;
  image: File | null;
}

interface NewPostProps {
  onSubmit: (values: NewPostValues) => void | Promise<void>;
}

const validationSchema = Yup.object<NewPostValues>({
  description: Yup.string()
    .required("Description is required")
    .max(200, "Too long, 200 char is maximum"),
  image: Yup.mixed<File>()
    .required("Image is required")
    .test(
      "fileType",
      "Only JPG or PNG",
      (value) =>
        value !== null && ["image/jpeg", "image/png"].includes(value.type),
    ),
});

const NewPostForm = ({ onSubmit }: NewPostProps) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  return (
    <Card>
      <CardHeader title="Create post" />
      <CardContent sx={{ width: "500px" }}>
        <Formik<NewPostValues>
          initialValues={{ description: "", image: null }}
          validationSchema={validationSchema}
          onSubmit={(
            values: NewPostValues,
            { setSubmitting }: FormikHelpers<NewPostValues>,
          ) => {
            void Promise.resolve(onSubmit(values)).finally(() =>
              setSubmitting(false),
            );
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            setFieldValue,
            isSubmitting,
          }) => (
            <Form>
              <Box>
                <Button component="label" variant="text">
                  Upload Image
                  <VisuallyHiddenInput
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      const file = event.currentTarget.files?.[0] ?? null;
                      setFieldValue("image", file);
                      if (imagePreview) URL.revokeObjectURL(imagePreview);
                      setImagePreview(file ? URL.createObjectURL(file) : null);
                    }}
                  />
                </Button>

                {touched.image && errors.image ? (
                  <FormHelperText error>{errors.image}</FormHelperText>
                ) : (
                  <FormHelperText>Only JPG or PNG accepted.</FormHelperText>
                )}
              </Box>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: 8,
                }}
              >
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="preview"
                    style={{ height: "300px", objectFit: "contain" }}
                  />
                )}
              </div>

              <TextField
                name="description"
                value={values.description}
                onChange={handleChange}
                margin="normal"
                label="Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                required
                error={touched.description && Boolean(errors.description)}
                helperText={touched.description && errors.description}
                slotProps={{
                  formHelperText: { style: { color: "red" } },
                }}
              />

              <Button
                fullWidth
                variant="contained"
                type="submit"
                sx={{ marginTop: "20px" }}
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};

export default NewPostForm;
