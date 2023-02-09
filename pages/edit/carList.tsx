import React, { useState } from "react";
import { Box, Button, Fab, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useRouter } from "next/router";

interface Column {
  id: "kind" | "photo" | "shooting_date" | "button";
  label: string;
  minWidth?: number;
  align?: "center";
}

const columns: readonly Column[] = [
  { id: "kind", label: "車種", minWidth: 170, align: "center" },
  { id: "photo", label: "写真", minWidth: 100, align: "center" },
  {
    id: "shooting_date",
    label: "撮影日",
    minWidth: 170,
    align: "center",
  },
  {
    id: "button",
    label: "",
    minWidth: 170,
    align: "center",
  },
];

const rows = [
  {
    kind: "軽トラック",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/a/aa/Suzuki_Carry_KX_4WD.JPG",
    shooting_date: "2021/01/01",
    button: "",
  },
  {
    kind: "軽",
    photo:
      "https://news-pctr.c.yimg.jp/uUzvQ3lML_bkIqyakc1vFhNrRI0RUQxg5aFkrX0xDg1_T0wXrbEJjtNGtrf1o9y34cGRPNX8MGhYObkob4JTdPAdp4r_qri_-xOiA5F6-fkLmdnsIrOC6kRZOad7h7gsyn7aGvjCD7WXKLwow5jxr5qZTa-oeuzsvAKY7OgaiphRA5OflZiE4FYHYBhQmyxI",
    shooting_date: "2021/01/01",
    button: "",
  },
];

export default function Index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  const NavigatePhotoList = () => {
    router.push({
      pathname: "/edit/photoList",
    });
  };

  return (
    <Box mt={2}>
      <Typography variant="h5" component="h2" gutterBottom align="center">
        車の選択
      </Typography>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align="center"
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.kind}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === "photo" ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={value}
                              alt={value}
                              style={{
                                width: "120px",
                                height: "100px",
                                objectFit: "cover",
                              }}
                            />
                          ) : (
                            value
                          )}
                          {column.id === "button" && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <Box>
                              <Button
                                variant="contained"
                                onClick={() => NavigatePhotoList()}
                              >
                                選択
                              </Button>
                            </Box>
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
