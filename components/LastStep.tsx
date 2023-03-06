/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Button, Fab, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { ImageList } from "../utils/utils";
import BackButton from "./BackButton";
import SendButton from "./SendButton";

export default function LastStep(props: { data: any }) {
  const { data } = props;
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmOpen = () => {
    setConfirmOpen(true);
  };
  const handleConfirmClose = () => {
    setConfirmOpen(false);
  };

  const imageList = {
    ...data,
  };

  return (
    <Box mt={2}>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {Object.keys(imageList).map((key: number | string, index) => {
          return (
            <Grid xs={6} sm={3} md={3} key={index}>
              <Box sx={{ position: "relative" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={
                    imageList[key as keyof typeof imageList].compressedBase64
                  }
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
                    top: "0",
                    left: "1px",
                    width: "80px",
                    height: "30px",
                    zIndex: 100,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "gray",
                    opacity: 0.9,
                  }}
                >
                  <Typography>{index + 1}枚目</Typography>
                </Box>
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
                  <Button variant="contained" size="small" onClick={() => {}}>
                    再撮影
                  </Button>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <Box>
        <BackButton
          handleConfirmOpen={handleConfirmOpen}
          handleConfirmClose={handleConfirmClose}
          confirmOpen={confirmOpen}
          text="車種タイプ選択して撮り直す"
          mText="戻ると撮影した写真は破棄されます。よろしいですか？"
          bLink="/take/selectCar"
        />
        <SendButton
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          open={open}
        />
      </Box>
    </Box>
  );
}
