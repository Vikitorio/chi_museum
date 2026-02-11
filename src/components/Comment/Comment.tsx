import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import dateFormatter from "../../utils/dateFormatter";

interface CommentProps {
    id: number,
    text: string,
    createdAt: string,
    user: {
        id: number,
        username: string,
    }
}

const Comment = (props: CommentProps) => {
    const [date, time] = dateFormatter(props.createdAt);
    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar sx={{ display: "flex", justifyContent: "center" }}>
                <Avatar sizes="small" sx={{ width: 24, height: 24, fontSize: "10px" }}> {props.user.username.slice(0, 1)}</Avatar>
            </ListItemAvatar>
            <ListItemText sx={{ minWidth: 0 }}>
                <Typography>
                    {props.user.username}
                </Typography>
                <Typography variant="caption">
                    {date + ", " + time}
                </Typography>
                <Divider />
                <Typography sx={{
                    overflowWrap: "anywhere",
                    wordBreak: "break-word",
                }}
                    variant="body2">
                    {props.text}
                </Typography>
            </ListItemText>
        </ListItem>);
}

export default Comment;