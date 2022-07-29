import { useCallback, useEffect, useState } from "react";
import Script from "next/script";

declare global {
  let gtag: any;
}

const analyticsScript = `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-THBHZKK');
`;

declare global {
  interface Window {
    dataLayer?: any[]
  }
}

function useDataLayer() {
  if (typeof window === 'undefined') {
    return [];
  }
  if (!window.dataLayer) {
    return window.dataLayer = [];
  }
  if (window.dataLayer) {
    return window.dataLayer;
  }
  return [] as never;
}

export function ScriptGoogleAnalytics() {
  const [isLoading, setIsLoading] = useState(true);
  const dataLayer = useDataLayer();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const onClick = useCallback(() => {
    console.log("sdl");
    if (isLoading || dataLayer === undefined) {
      return;
    }
    console.log("sdlfkjasdoifj");
    dataLayer.push({ ecommerce: null });
    dataLayer.push({
      event: "view_item_list",
      ecommerce: {
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
      },
    });
  }, [dataLayer, isLoading]);

  if (isLoading) return <></>;
  return (
    <>
      <Script
        id="stripe-js"
        dangerouslySetInnerHTML={{ __html: analyticsScript }}
      />

      <button onClick={onClick}>Add itens</button>
    </>
  );
}
