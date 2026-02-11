import { Avatar, Badge, Box, Card, CardActions, CardContent, CardHeader, Collapse, Divider, IconButton, List } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import Comment from "../Comment/Comment";
import dateFormatter from "../../utils/dateFormatter";
import { useState } from "react";

interface PostProps {
    id: number,
    imageUrl: string,
    description: string,
    user: {
        id: number,
        username: string
    },
    commentCount: number,
    createdAt: string
}

const comments = [{
    "id": 115,
    "text": "@asddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
    "createdAt": "2026-02-10T01:03:22.993Z",
    "user": {
        "id": 89,
        "username": "yuliia"
    }
},
{
    "id": 115,
    "text": "@",
    "createdAt": "2026-02-10T01:03:22.993Z",
    "user": {
        "id": 89,
        "username": "yuliia"
    }
}]
const Post = (props: PostProps) => {
    const [date, time] = dateFormatter(props.createdAt);
    const [isCommentsOpen, setIsCommentsOpen] = useState<boolean>(false)

    const toggleCommentSection = () => {
        setIsCommentsOpen(!isCommentsOpen);
    }
    return (
        <>
            <Card sx={{ width: "500px" }}>
                <CardHeader
                    avatar={<Avatar>{props.user.username.slice(0, 1)}</Avatar>}
                    title={props.user.username}
                    subheader={date + ", " + time}
                />
                <CardContent>
                    <Box>
                        <img src={props.imageUrl} />
                    </Box>
                    <Box>
                        {props.description}
                    </Box>
                </CardContent>
                <Divider />
                <CardActions>
                    <Box sx={{ marginLeft: "auto" }}>
                        <IconButton onClick={toggleCommentSection}>
                            <Badge badgeContent={1} color="primary">
                                <SpeakerNotesIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <DeleteIcon color="error" />
                        </IconButton>
                    </Box>
                </CardActions>
                <Divider />
                <Collapse in={isCommentsOpen}>
                    <List sx={{ padding: "10px 5px 10px 30px" }}>
                        {comments.map((item) => {
                            return (<Comment {...item} />)
                        })}
                    </List>
                </Collapse>
            </Card>
        </>
    );
}

export default Post;