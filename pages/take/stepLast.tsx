import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Button, Fab, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useRouter } from "next/router";

type ImageList = {
  image1: string | undefined;
  image2: string | undefined;
  image3: string | undefined;
};

export default function stepLast() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const imageList: ImageList = {
    image1: router.query.image1 as string,
    image2: router.query.image2 as string,
    image3: router.query.image3 as string,
  };

  // const imageList: ImageList = {
  //   image1: "https://picsum.photos/536/354",
  //   image2: "https://picsum.photos/536/354",
  //   image3: "https://picsum.photos/536/354",
  // };

  return (
    <Box mt={2}>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {Object.keys(imageList).map((key, index) => {
          if (imageList[key as keyof typeof imageList]) {
            return (
              <Grid xs={6} sm={3} md={3} key={index}>
                <Box sx={{ position: "relative" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageList[key as keyof typeof imageList]}
                    alt="car"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: "23px",
                      right: "10px",
                      width: "60px",
                      height: "20px",
                      zIndex: 100,
                    }}
                  >
                    <Button variant="contained" size="small">
                      再撮影
                    </Button>
                  </Box>
                </Box>
              </Grid>
            );
          }
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
