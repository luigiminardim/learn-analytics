import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";

const analyticsScript = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-P1P5ZVZ361');`;

export function ScriptGoogleAnalytics() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000)
  }, [])
  
  if (isLoading) return <></>
  return (
    <>
      <Script
        strategy="afterInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-P1P5ZVZ361"
      ></Script>
      <Script
        id="Script-GoogleAnalytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: analyticsScript }}
      />
    </>
  );
}
