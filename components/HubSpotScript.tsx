"use client";
import Script from "next/script";

export default function HubSpotScript() {
  return (
    <Script
      strategy="afterInteractive"
      src={`//js.hs-scripts.com/${process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID}.js`}
    />
  );
}