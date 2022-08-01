import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ScriptGoogleAnalytics } from "../src/ScriptGoogleAnalytics";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <pre>{router.pathname}</pre>
      <Component key={router.pathname} {...pageProps} />
    </>
  );
}

export default MyApp;
