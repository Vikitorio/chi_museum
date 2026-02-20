import {
  Avatar,
  Badge,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import dateFormatter from "../../utils/dateFormatter";
import { useState } from "react";
import { useRequest } from "ahooks";
import exhibitsApi from "../../api/ExhibitsApi";
import CommentStripe from "../CommentStripe/CommentStripe";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";

interface PostProps {
  id: number;
  imageUrl: string;
  description: string;
  user: {
    id: number;
    username: string;
  };
  commentCount: number;
  createdAt: string;
  myId: number | null;
  onDeleted?: (id: number) => void;
}

const Post = (props: PostProps) => {
  const [date, time] = dateFormatter(props.createdAt);
  const [isCommentsOpen, setIsCommentsOpen] = useState<boolean>(false);
  const [imageSrc, setImageSrc] = useState<string>(props.imageUrl);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);

  const { run: runDelete, loading: deleteLoading } = useRequest(
    () => exhibitsApi.deleteExhibit(props.id),
    {
      manual: true,
      onSuccess: () => {
        setDeleteDialogOpen(false);
        props.onDeleted?.(props.id);
      },
    },
  );

  const toggleCommentSection = () => {
    setIsCommentsOpen(!isCommentsOpen);
  };

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
              minHeight: "350px",
            }}
          />
          <Box>{props.description}</Box>
        </CardContent>
        <Divider />
        <CardActions>
          <Box sx={{ marginLeft: "auto" }}>
            <IconButton
              onClick={() => {
                toggleCommentSection();
              }}
            >
              <Badge badgeContent={props.commentCount} color="primary">
                <SpeakerNotesIcon />
              </Badge>
            </IconButton>
            {props.user.id === props.myId && (
              <IconButton onClick={() => setDeleteDialogOpen(true)}>
                <DeleteIcon color="error" />
              </IconButton>
            )}
          </Box>
        </CardActions>
        <Divider />
        <CommentStripe
          postId={props.id}
          myId={props.myId}
          commentCount={props.commentCount}
          isOpen={isCommentsOpen}
        />
      </Card>
      <DeleteConfirmationModal
        deleteDialogOpen={deleteDialogOpen}
        loading={deleteLoading}
        onConfirm={runDelete}
        setDeleteDialogOpen={setDeleteDialogOpen}
        title="Delete Post?"
      />
    </>
  );
};

export default Post;
