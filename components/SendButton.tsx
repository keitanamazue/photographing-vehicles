import { Box, Button, Fab } from "@mui/material";
import OutboxIcon from "@mui/icons-material/Outbox";
import SendModal from "./SendModal";

function SendButton(props: {
  handleClickOpen: () => void;
  handleClose: () => void;
  open: boolean;
}) {
  const { handleClickOpen, handleClose, open } = props;
  return (
    <Box>
      <Box
        sx={{ position: "fixed", bottom: "30px", right: "10px", zIndex: 10000 }}
      >
        <Button variant="contained" size="small" onClick={handleClickOpen}>
          決定してサーバーに送信
        </Button>
      </Box>
      <SendModal handleClose={handleClose} open={open} />
    </Box>
  );
}

export default SendButton;
