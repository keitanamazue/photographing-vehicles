import { Box, Button, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import OutboxIcon from "@mui/icons-material/Outbox";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useRouter } from "next/router";

function BackModal(props: {
  handleConfirmClose: () => void;
  confirmOpen: boolean;
  mText: string;
  bLink: string;
}) {
  const { handleConfirmClose, confirmOpen, mText, bLink } = props;

  const router = useRouter();

  return (
    <Dialog
      open={confirmOpen}
      onClose={handleConfirmClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{mText}</DialogTitle>
      <DialogActions>
        <Button onClick={handleConfirmClose} color="secondary">
          いいえ
        </Button>
        <Button
          onClick={() => router.push(bLink)}
          autoFocus
          variant="contained"
        >
          はい
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default BackModal;
