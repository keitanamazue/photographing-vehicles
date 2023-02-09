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
      <Box sx={{ position: "fixed", bottom: "30px", right: "30px" }}>
        <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
          <OutboxIcon />
        </Fab>
      </Box>
      <SendModal handleClose={handleClose} open={open} />
    </Box>
  );
}

export default SendButton;
