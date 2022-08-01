import { useCallback, useEffect, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

function useAnalyticsGlobals(): {
  dataLayer: any[];
  gtag: (...args: any[]) => void;
} {
  if (typeof window === "undefined") {
    return { dataLayer: [], gtag: () => {} };
  }
  if (!window.dataLayer) {
    window.dataLayer = [];
  }
  if (!window.gtag) {
    window.gtag = function () {
      window.dataLayer?.push(arguments);
    };
    window.gtag("js", new Date());
  }
  return {
    dataLayer: window.dataLayer ?? [],
    gtag: window.gtag ?? (() => {}),
  };
}

type ScriptGoogleAnalyticsProps = {
  trackingId: string;
};

export function ScriptGoogleAnalytics({
  trackingId,
}: ScriptGoogleAnalyticsProps) {
  const { gtag } = useAnalyticsGlobals();

  useEffect(() => {
    gtag("config", trackingId);
  }, [gtag, trackingId]);

  const onClick = useCallback(() => {
    gtag("event", "view_item_list", {
      send_to: trackingId,
      items: [
        {
          item_name: "Triblend Android T-Shirt", // Name or ID is required.
          item_id: "12345",
          price: 15.25,
          item_brand: "Google",
          item_category: "Apparel",
          item_category2: "Mens",
          item_category3: "Shirts",
          item_category4: "Tshirts",
          item_variant: "Gray",
          item_list_name: "Search Results",
          item_list_id: "SR123",
          index: 1,
          quantity: 1,
        },
        {
          item_name: "Donut Friday Scented T-Shirt",
          item_id: "67890",
          price: 33.75,
          item_brand: "Google",
          item_category: "Apparel",
          item_category2: "Mens",
          item_category3: "Shirts",
          item_category4: "Tshirts",
          item_variant: "Black",
          item_list_name: "Search Results",
          item_list_id: "SR123",
          index: 2,
          quantity: 1,
        },
      ],
    });
  }, [gtag, trackingId]);

  return (
    <>
      <Script
        id={`ScriptGoogleAnalytics-${trackingId}`}
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
      />

      <button onClick={onClick}>Add itens</button>
    </>
  );
}
