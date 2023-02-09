import { Box, Button, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import OutboxIcon from "@mui/icons-material/Outbox";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { open } from "fs";

function SendModal(props: { handleClose: () => void; open: boolean }) {
  const { handleClose, open } = props;
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        画像をアップロードしてよろしいですか？
      </DialogTitle>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          キャンセル
        </Button>
        <Button onClick={handleClose} autoFocus variant="contained">
          送信
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default SendModal;
