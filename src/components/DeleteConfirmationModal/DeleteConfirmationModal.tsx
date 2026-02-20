import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

interface DeleteModalProps {
  deleteDialogOpen: boolean;
  setDeleteDialogOpen: (newState: boolean) => void;
  loading: boolean;
  onConfirm: () => void;
  title?: string;
}

const DeleteConfirmationModal = ({
  deleteDialogOpen,
  setDeleteDialogOpen,
  onConfirm,
  loading,
  title = "Delete ?",
}: DeleteModalProps) => {
  return (
    <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
      <DialogTitle>{title}</DialogTitle>
      <DialogActions>
        <Button onClick={() => setDeleteDialogOpen(false)} disabled={loading}>
          Cancel
        </Button>
        <Button
          onClick={() => onConfirm()}
          color="error"
          variant="contained"
          disabled={loading}
        >
          {loading ? "Deleting..." : "Delete"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationModal;
