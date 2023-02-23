import * as React from "react";
import { Box, Button, Card, CardContent } from "@mui/material";
import Link from "next/link";

const CARS = [
  { kind: "軽", link: "/take/light/normal/step/1" },
  { kind: "軽ハイルーフ", link: "/take/light/highRoof/step/1" },
  { kind: "軽SUV", link: "/take/light/suv/step/1" },
  { kind: "軽バン・軽ワゴン", link: "/take/light/ban_wagon/step/1" },
  { kind: "軽トラック", link: "/take/light/track/step/1" },
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
