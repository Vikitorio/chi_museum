import { Box, Button, Card, CardContent, CardHeader, styled, TextField } from "@mui/material";
import { useState } from "react";
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});
interface NewPostProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>, imageFile: File | null) => void
}
const NewPostForm = ({ handleSubmit }: NewPostProps) => {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;
        setImageFile(file);
        setImagePreview(URL.createObjectURL(file));
    };


    return (
        <Card>
            <CardHeader title="Create post" />
            <CardContent sx={{ width: "500px" }}>
                <form onSubmit={(event) => handleSubmit(event, imageFile)}>
                    <Box>
                        <Button component="label" variant="text">
                            Upload Image
                            <VisuallyHiddenInput
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </Button>
                    </Box>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        {imagePreview && (
                            <img
                                src={imagePreview}
                                alt="preview"
                                style={{ height: "300px", objectFit: "contain", }}
                            />
                        )}
                    </div>
                    <TextField
                        name="description"
                        margin="normal"
                        label="Description"
                        variant="outlined"
                        required
                        fullWidth
                        multiline
                        rows={4} />

                    <Button fullWidth variant="contained" type="submit" sx={{ marginTop: "20px" }}>Submit</Button>
                </form>
            </CardContent>
        </Card >);
}


export default NewPostForm;