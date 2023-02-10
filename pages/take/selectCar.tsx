import * as React from "react";
import { Box, Button, Card, CardContent } from "@mui/material";
import Link from "next/link";

const CARS = [
  { kind: "軽", link: "/take/light/normal/step1" },
  { kind: "軽ハイルーフ", link: "/take/step1" },
  { kind: "軽SUV", link: "/take/step1" },
  { kind: "軽バン・軽ワゴン", link: "/take/step1" },
  { kind: "軽トラック", link: "/take/step1" },
];

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
      {CARS.map((car, index) => {
        return (
          <Box mt={2} key={index}>
            <Link href={car.link} style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="primary"
                sx={{ width: "100%" }}
              >
                {car.kind}
              </Button>
            </Link>
          </Box>
        );
      })}
    </Box>
  );
}
