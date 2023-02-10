/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Button, Fab, Typography } from "@mui/material";
import { useRouter } from "next/router";
import SendButton from "../../components/SendButton";

import { ImageList } from "../../utils/utils";
import BackButton from "../../components/BackButton";

export default function stepLast() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [imageList, setImageList] = useState<ImageList>({
    0: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Suzuki_Carry_KX_4WD.JPG",
    1: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Suzuki_Carry_KX_4WD.JPG",
    2: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Suzuki_Carry_KX_4WD.JPG",
    3: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Suzuki_Carry_KX_4WD.JPG",
    4: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Suzuki_Carry_KX_4WD.JPG",
    5: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Suzuki_Carry_KX_4WD.JPG",
    6: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Suzuki_Carry_KX_4WD.JPG",
    7: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Suzuki_Carry_KX_4WD.JPG",
  });

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
    // router.push({
    //   pathname: "/edit/edit",
    //   query: {
    //     ...imageList,
    //     editIndex: index,
    //   },
    // });
  };

  useEffect(() => {
    //ここで、渡ってきたqueryのidでapi通信を行い、画像のurlを取得する
    if (Object.keys(router.query).length) {
      setImageList(router.query as ImageList);
    }
  }, [router.query]);

  return (
    <>
      {imageList ? (
        <Box mt={2}>
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {Object.keys(imageList).map((key: number | string, index) => {
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
            })}
          </Grid>
        </Box>
      ) : null}

      <Box>
        <BackButton
          handleConfirmOpen={handleConfirmOpen}
          handleConfirmClose={handleConfirmClose}
          confirmOpen={confirmOpen}
          text="写真選択に戻る"
          mText="戻ると変更した写真は破棄されます。よろしいですか？"
          bLink="/edit/carList"
        />
        <SendButton
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          open={open}
        />
      </Box>
    </>
  );
}
