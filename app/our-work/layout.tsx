import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | Accounting Website Design Projects",
  description:
    "Explore real website projects created by Caramel Web Studios for accounting and taxation businesses, including FlexiPay Systems, Alchemy Associates and M&M Accounts and Taxation.",
  alternates: {
    canonical: "/our-work",
  },
  openGraph: {
    title: "Our Work | Caramel Web Studios",
    description:
      "A selection of live accounting and taxation websites created by Caramel Web Studios.",
    url: "https://caramelwebstudios.com/our-work",
    type: "website",
  },
};

export default function OurWorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
