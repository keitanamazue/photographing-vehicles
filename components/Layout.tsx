import { ThemeProvider } from "@emotion/react";
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ReactElement } from "react";
import { Header } from "./Header";
import { theme } from "./theme";

export default function Layout(props: { children: ReactElement }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container maxWidth="xs">
          <main>{props.children}</main>
        </Container>
      </ThemeProvider>
    </>
  );
}
