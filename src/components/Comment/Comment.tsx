import { Avatar, Box, Button, Dialog, DialogActions, DialogTitle, Divider, IconButton, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import dateFormatter from "../../utils/dateFormatter";
import { useRequest } from "ahooks";
import commentApi from "../../api/CommentApi";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

interface CommentProps {
    id: number,
    text: string,
    createdAt: string,
    user: {
        id: number,
        username: string,
    }
    myId: number | null,
    postId: number,
    onDeleted?: (id: number) => void
}

const Comment = (props: CommentProps) => {
    const [date, time] = dateFormatter(props.createdAt);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);
    const { run: runDelete, loading: deleteLoading } = useRequest(
        () => commentApi.deleteComment(props.postId, props.id),
        {
            manual: true,
            onSuccess: () => {
                setDeleteDialogOpen(false);
                props.onDeleted?.(props.id);
            }
        }
    );
    console.log(props.user.id, props.myId)
    return (<>
        <ListItem alignItems="flex-start">
            <ListItemAvatar sx={{ display: "flex", justifyContent: "center" }}>
                <Avatar sizes="small" sx={{ width: 24, height: 24, fontSize: "10px" }}>
                    {props.user.username.slice(0, 1)}
                </Avatar>
            </ListItemAvatar>
            <ListItemText sx={{ minWidth: 0 }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Typography>{props.user.username}</Typography>
                    {props.user.id === props.myId && (
                        <IconButton size="small" onClick={() => setDeleteDialogOpen(true)}>
                            <DeleteIcon fontSize="small" color="error" />
                        </IconButton>
                    )}
                </Box>
                <Typography variant="caption">{date + ", " + time}</Typography>
                <Divider />
                <Typography
                    sx={{ overflowWrap: "anywhere", wordBreak: "break-word" }}
                    variant="body2"
                >
                    {props.text}
                </Typography>
            </ListItemText>
        </ListItem>
        <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
            <DialogTitle>Delete comment?</DialogTitle>
            <DialogActions>
                <Button onClick={() => setDeleteDialogOpen(false)} disabled={deleteLoading}>
                    Cancel
                </Button>
                <Button
                    onClick={() => runDelete()}
                    color="error"
                    variant="contained"
                    disabled={deleteLoading}
                >
                    {deleteLoading ? "Deleting..." : "Delete"}
                </Button>
            </DialogActions>
        </Dialog></>);
}

export default Comment;


