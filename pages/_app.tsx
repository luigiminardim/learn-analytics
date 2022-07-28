import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ScriptGoogleAnalytics } from "../src/ScriptGoogleAnalytics";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ScriptGoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
