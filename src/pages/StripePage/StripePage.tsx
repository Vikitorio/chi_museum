import { Stack } from "@mui/material";
import Post from "../../components/Post/Post";

const StripePage = () => {

    const posts = [
        {
            "id": 178,
            "imageUrl": "/static/0bb006d6-734f-4ac9-9737-a5cfbf13d5a9.png",
            "description": "TEst new post",
            "user": {
                "id": 90,
                "username": "SomeNewPerson2222"
            },
            "commentCount": 0,
            "createdAt": "2026-02-10T12:20:16.332Z"
        },
        {
            "id": 169,
            "imageUrl": "/static/4c1bce6c-2e20-4eee-b201-9fa8a1025f37.jpg",
            "description": "AAa",
            "user": {
                "id": 56,
                "username": "idle_user_4"
            },
            "commentCount": 0,
            "createdAt": "2026-02-10T01:35:36.609Z"
        },
        {
            "id": 166,
            "imageUrl": "/static/647e59bd-4edf-4330-8f4e-a133f1859a39.jpg",
            "description": "AAAAAAAAAAAAAAAAA",
            "user": {
                "id": 55,
                "username": "idle_user_3"
            },
            "commentCount": 0,
            "createdAt": "2026-02-10T01:27:24.566Z"
        },
        {
            "id": 162,
            "imageUrl": "/static/52216789-70ce-49b4-a9e7-d38853cb85cd.jpg",
            "description": "cx,lxcl;x",
            "user": {
                "id": 55,
                "username": "idle_user_3"
            },
            "commentCount": 1,
            "createdAt": "2026-02-10T00:55:50.079Z"
        },
        {
            "id": 161,
            "imageUrl": "/static/409c4aab-2bdf-4377-a4ae-35c748a8b93a.jpg",
            "description": "test",
            "user": {
                "id": 55,
                "username": "idle_user_3"
            },
            "commentCount": 0,
            "createdAt": "2026-02-10T00:50:35.778Z"
        },
        {
            "id": 160,
            "imageUrl": "/static/c59e3ed7-8915-41a8-9ae6-5517f2343797.jpg",
            "description": "dl;x;cx;",
            "user": {
                "id": 55,
                "username": "idle_user_3"
            },
            "commentCount": 0,
            "createdAt": "2026-02-10T00:50:10.427Z"
        },
        {
            "id": 159,
            "imageUrl": "/static/0f99c3db-eadd-4d9f-a034-8b508e2961f6.jpg",
            "description": "slcsl;c;spcls,cplp",
            "user": {
                "id": 55,
                "username": "idle_user_3"
            },
            "commentCount": 0,
            "createdAt": "2026-02-10T00:35:00.772Z"
        },
        {
            "id": 156,
            "imageUrl": "/static/1d52a9b7-fe9c-4f9f-827d-47e7f56c38cb.png",
            "description": "asfasdfdsf",
            "user": {
                "id": 88,
                "username": "NewestPersonOnThisSite"
            },
            "commentCount": 0,
            "createdAt": "2026-02-09T21:06:05.396Z"
        },
    ];
    return (
        <Stack spacing={3}>
            {posts.map((post) => <Post {...post} />)}
        </Stack >
    );
}

export default StripePage;