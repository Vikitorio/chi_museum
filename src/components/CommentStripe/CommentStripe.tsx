import {
  Box,
  Button,
  CircularProgress,
  Collapse,
  List,
  TextField,
} from "@mui/material";
import { useState } from "react";
import Comment from "../Comment/Comment";
import commentApi from "../../api/CommentApi";
import { useRequest } from "ahooks";
import type CommentInterface from "../../interfaces/commentInterface";

interface CommentStripeProps {
  postId: number;
  myId: number | null;
  commentCount: number;
  isOpen: boolean;
}

const CommentStripe = ({
  postId,
  myId,
  commentCount,
  isOpen,
}: CommentStripeProps) => {
  const [comments, setComments] = useState<CommentInterface[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const { run: loadComments, loading: loadingComments } = useRequest(
    () => commentApi.getComments(postId),
    {
      manual: true,
      refreshDeps: [commentCount],
      onSuccess: (data) => setComments(data),
    },
  );

  const { run: submitComment, loading: submitting } = useRequest(
    () => commentApi.addComment(postId, { text: newComment }),
    {
      manual: true,
      onSuccess: () => {
        setNewComment("");
        loadComments();
      },
    },
  );

  const handleCommentDeleted = (id: number) => {
    setComments((prev) => prev.filter((c) => c.id !== id));
  };

  const handleSubmit = () => {
    if (newComment.trim()) {
      submitComment();
    }
  };

  return (
    <Collapse
      in={isOpen}
      onEnter={() => {
        if (commentCount !== 0) {
          loadComments();
        }
      }}
    >
      <Box sx={{ padding: "10px 16px 6px 16px", display: "flex", gap: 1 }}>
        <TextField
          fullWidth
          size="small"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit();
            }
          }}
          disabled={submitting}
        />
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={submitting || !newComment.trim()}
          sx={{ whiteSpace: "nowrap", minWidth: "80px" }}
        >
          {submitting ? <CircularProgress size={18} /> : "Post"}
        </Button>
      </Box>

      {loadingComments ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 2 }}>
          <CircularProgress size={24} />
        </Box>
      ) : (
        <List sx={{ padding: "4px 5px 10px 30px" }}>
          {comments.map((item) => (
            <Comment
              key={item.id}
              postId={postId}
              myId={myId}
              {...item}
              onDeleted={handleCommentDeleted}
            />
          ))}
        </List>
      )}
    </Collapse>
  );
};

export default CommentStripe;
