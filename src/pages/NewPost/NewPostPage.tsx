import { useNavigate } from "react-router";
import exhibitsApi from "../../api/ExhibitsApi";
import NewPostForm from "../../components/NewPostForm/NewPostForm";
import { useState } from "react";
import { CircularProgress } from "@mui/material";

const NewPostPage = () => {
    const navigate = useNavigate();
    const [postSaving, setPostSaving] = useState(false);
    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>, imageFile: File | null
    ) => {
        event.preventDefault();
        if (!imageFile) return;
        setPostSaving(true);
        const formData = new FormData();
        formData.append("image", imageFile);
        const data = new FormData(event.currentTarget);
        const description = data.get("description");
        formData.append("description", String(description));
        const response = await exhibitsApi.addNewExhibit(formData);
        if (response.status == 201) {
            navigate("/home");
        }
        setPostSaving(false);
    };
    return (
        <div style={{ flex: "1", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {!postSaving ? <NewPostForm handleSubmit={handleSubmit} /> : <CircularProgress />}
        </div>
    )
}

export default NewPostPage;