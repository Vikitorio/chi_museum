import { Avatar, Box, Card, CardContent, CardHeader } from "@mui/material";

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
    return (
        <Card>
            <CardHeader
                avatar={<Avatar>{props.user.username.slice(0, 1)}</Avatar>}
                title={props.user.username}
                subheader={props.createdAt.split("T")[0]}
            />
            <CardContent>
                <Box>
                    <img src={props.imageUrl} />
                </Box>
                <Box>
                    {props.description}
                </Box>
            </CardContent>
        </Card>
    );

}

export default Post;