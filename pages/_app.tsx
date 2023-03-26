import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import NavBar from "@/src/components/mainPage/navBar/navBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
