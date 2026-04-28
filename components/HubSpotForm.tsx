"use client";
import { useEffect } from "react";

export default function HubSpotForm({ formId }: { formId: string }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    document.body.appendChild(script);

    script.onload = () => {
      
      if (window.hbspt) {
      
        window.hbspt.forms.create({
          region: "na1",
          portalId: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID,
          formId: formId,
          target: "#hubspot-form"
        });
      }
    };
  }, [formId]);

  return <div id="hubspot-form" className="bg-white p-8 rounded-2xl shadow-sm border border-orange-100" />;
}