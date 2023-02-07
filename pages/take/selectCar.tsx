import * as React from "react";
import { Box, Button, Card, CardContent } from "@mui/material";
import Link from "next/link";

export default function selectCar() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      <Box mt={2}>
        <Link href="/take/step1" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary" sx={{ width: "100%" }}>
            軽
          </Button>
        </Link>
      </Box>
      <Box mt={2}>
        <Link href="/take/step1" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary" sx={{ width: "100%" }}>
            軽ハイルーフ
          </Button>
        </Link>
      </Box>
      <Box mt={2}>
        <Link href="/take/step1" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary" sx={{ width: "100%" }}>
            軽SUV
          </Button>
        </Link>
      </Box>
      <Box mt={2}>
        <Link href="/take/step1" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary" sx={{ width: "100%" }}>
            軽バン・軽ワゴン
          </Button>
        </Link>
      </Box>
      <Box mt={2}>
        <Link href="/take/step1" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary" sx={{ width: "100%" }}>
            軽トラック
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
