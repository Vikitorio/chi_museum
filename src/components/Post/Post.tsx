import { Avatar, Badge, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, IconButton, List } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import Comment from "../Comment/Comment";
import dateFormatter from "../../utils/dateFormatter";
import { useState } from "react";
import commentApi from "../../api/CommentApi";
import { useRequest } from "ahooks";

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


const Post = (props: PostProps) => {
    const [date, time] = dateFormatter(props.createdAt);
    const [isCommentsOpen, setIsCommentsOpen] = useState<boolean>(false);
    const [imageSrc, setImageSrc] = useState<string>(props.imageUrl);
    const { data: commentsData = [], run, loading, error } = useRequest((postId: number) => commentApi.getComments(postId), {
        manual: true,
        refreshDeps: [props.commentCount],

    });

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
                    <CardMedia
                        component="img"
                        image={imageSrc}
                        onError={() => {
                            setImageSrc("/general-img-landscape.png");
                        }}
                        sx={{
                            height: "auto",
                            width: "100%",
                            objectFit: "cover",
                            minHeight: "350px"
                        }}
                    />
                    <Box>
                        {props.description}
                    </Box>
                </CardContent>
                <Divider />
                <CardActions>
                    <Box sx={{ marginLeft: "auto" }}>
                        <IconButton onClick={() => {run(props.id); toggleCommentSection();}} disabled={props.commentCount == 0}>
                            <Badge badgeContent={props.commentCount} color="primary">
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
                        {commentsData.map((item) => {
                            return (<Comment {...item} />)
                        })}
                    </List>
                </Collapse>
            </Card>
        </>
    );
}

export default Post;