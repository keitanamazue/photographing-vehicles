import { Box, Button, Fab } from "@mui/material";
import BackModal from "./BackModal";

function BackButton(props: {
  handleConfirmOpen: () => void;
  handleConfirmClose: () => void;
  confirmOpen: boolean;
}) {
  const { handleConfirmOpen, handleConfirmClose, confirmOpen } = props;
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
        写真選択に戻る
      </Button>
      <BackModal
        handleConfirmClose={handleConfirmClose}
        confirmOpen={confirmOpen}
      />
    </Box>
  );
}

export default BackButton;
