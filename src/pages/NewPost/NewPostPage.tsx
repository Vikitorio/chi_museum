import { useNavigate } from "react-router";
import exhibitsApi from "../../api/ExhibitsApi";
import NewPostForm from "../../components/NewPostForm/NewPostForm";
import { useState } from "react";
import { CircularProgress } from "@mui/material";

const NewPostPage = () => {
    const navigate = useNavigate();
    const [postSaving, setPostSaving] = useState(false);
    const handleSubmit = async ({ description, image }: { description: string; image: File | null }) => {
        if (!image) return;
        setPostSaving(true);
        const formData = new FormData();
        formData.append("image", image);
        formData.append("description", description);
        const response = await exhibitsApi.addNewExhibit(formData);
        if (response.status === 201) {
            navigate("/home");
        }
        setPostSaving(false);
    };
    return (
        <div style={{ flex: "1", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {!postSaving ? <NewPostForm onSubmit={handleSubmit} /> : <CircularProgress />}
        </div>
    )
}

export default NewPostPage;