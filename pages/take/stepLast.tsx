import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Button, Fab, Typography } from "@mui/material";
import { useRouter } from "next/router";
import SendButton from "../../components/SendButton";
import { ImageList } from "../../utils/utils";

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

  const editImage = (index: number) => {
    router.push({
      pathname: "/take/edit",
      query: {
        0: router.query[0],
        1: router.query[1],
        2: router.query[2],
        editIndex: index,
      },
    });
  };

  const imageList: ImageList = {
    0: router.query[0] as string,
    1: router.query[1] as string,
    2: router.query[2] as string,
  };

  // const imageList: ImageList = {
  //   image1: "https://picsum.photos/536/354",
  //   image2: "https://picsum.photos/536/354",
  //   image3: "https://picsum.photos/536/354",
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
      <SendButton
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        open={open}
      />
    </Box>
  );
}
