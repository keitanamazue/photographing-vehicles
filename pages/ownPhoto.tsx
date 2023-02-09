import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Button, Fab, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

export default function carList() {
  const photo = [1, 1, 1];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box mt={2}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {photo.map((item, index) => {
          return (
            <Grid xs={6} key={index}>
              <Box sx={{ position: "relative" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://picsum.photos/536/354"
                  alt="car"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    zIndex: 100,
                  }}
                >
                  <Button variant="contained">再撮影</Button>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <Box sx={{ position: "fixed", bottom: "30px", right: "30px" }}>
        <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
          <AddIcon />
        </Fab>
      </Box>
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
    </Box>
  );
}
