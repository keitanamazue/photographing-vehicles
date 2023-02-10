/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Button, Fab, Typography } from "@mui/material";
import { useRouter } from "next/router";
import SendButton from "../../../../components/SendButton";
import { ImageList } from "../../../../utils/utils";
import BackButton from "../../../../components/BackButton";

export default function stepLast() {
  const router = useRouter();
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

  const editImage = (index: number) => {
    router.push({
      pathname: "/take/light/track/edit",
      query: {
        0: router.query[0],
        1: router.query[1],
        2: router.query[2],
        3: router.query[3],
        4: router.query[4],
        5: router.query[5],
        6: router.query[6],
        7: router.query[7],
        8: router.query[8],
        9: router.query[9],
        10: router.query[10],
        11: router.query[11],
        12: router.query[12],
        editIndex: index,
      },
    });
  };

  const imageList: ImageList = {
    0: router.query[0] as string,
    1: router.query[1] as string,
    2: router.query[2] as string,
    3: router.query[3] as string,
    4: router.query[4] as string,
    5: router.query[5] as string,
    6: router.query[6] as string,
    7: router.query[7] as string,
    8: router.query[8] as string,
    9: router.query[9] as string,
    10: router.query[10] as string,
    11: router.query[11] as string,
    12: router.query[12] as string,
  };

  // const imageList: ImageList = {
  //   1: "https://picsum.photos/536/354",
  //   2: "https://picsum.photos/536/354",
  //   3: "https://picsum.photos/536/354",
  // };

  return (
    <Box mt={2}>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {Object.keys(imageList).map((key: number | string, index) => {
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
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => editImage(index)}
                    >
                      再撮影
                    </Button>
                  </Box>
                </Box>
              </Grid>
            );
          }
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
