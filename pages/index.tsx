import * as React from "react";
import { Box, Button, Card, CardContent } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      <Box>
        <Link href="/selectCar" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary" sx={{ width: "100%" }}>
            新しい車の撮影
          </Button>
        </Link>
      </Box>
      <Box mt={2}>
        <Link href="edit/carList" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary" sx={{ width: "100%" }}>
            既存の車の再撮影
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
