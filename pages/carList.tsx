import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Button, Fab, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import OutboxIcon from "@mui/icons-material/Outbox";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

interface Column {
  id: "kind" | "photo" | "shooting_date" | "button";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "kind", label: "車種", minWidth: 170 },
  { id: "photo", label: "写真", minWidth: 100 },
  {
    id: "shooting_date",
    label: "撮影日",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "button",
    label: "",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  kind: string;
  photo: string;
  shooting_date: string;
  button: string;
}

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
  const photo = [1, 1, 1];
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box mt={2}>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
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
                              <Button variant="contained">選択</Button>
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
