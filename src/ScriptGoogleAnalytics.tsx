import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";

const analyticsScript = `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-THBHZKK');
`;

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
        id="Script-GoogleTagManager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: analyticsScript }}
      />
    </>
  );
}
