import { Box, Button, Fab } from "@mui/material";
import BackModal from "./BackModal";

function BackButton(props: {
  handleConfirmOpen: () => void;
  handleConfirmClose: () => void;
  confirmOpen: boolean;
  text: string;
  mText: string;
  bLink: string;
}) {
  const {
    handleConfirmOpen,
    handleConfirmClose,
    confirmOpen,
    text,
    mText,
    bLink,
  } = props;
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "30px",
        left: "10px",
        zIndex: 10000,
      }}
    >
      <Button
        variant="contained"
        size="small"
        onClick={() => handleConfirmOpen()}
        // onClick={() => router.push("/edit/carList")}
      >
        {text}
      </Button>
      <BackModal
        handleConfirmClose={handleConfirmClose}
        confirmOpen={confirmOpen}
        mText={mText}
        bLink={bLink}
      />
    </Box>
  );
}

export default BackButton;
