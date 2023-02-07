import { ThemeProvider } from "@emotion/react";
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ReactElement } from "react";
import { theme } from "./theme";

export default function Layout(props: { children: ReactElement }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="xs">
          <main>{props.children}</main>
        </Container>
      </ThemeProvider>
    </>
  );
}
