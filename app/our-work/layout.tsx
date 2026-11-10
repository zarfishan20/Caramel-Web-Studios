import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | Website Design Concepts for Accountants",
  description:
    "Explore illustrative website design concepts for accountancy practices, bookkeeping firms and tax advisers from Caramel Web Studios in London.",
  alternates: {
    canonical: "/our-work",
  },
  openGraph: {
    title: "Our Work | Caramel Web Studios",
    description:
      "Explore illustrative website design concepts for accountancy practices, bookkeeping firms and tax advisers.",
    url: "https://caramelwebstudios.com/our-work",
    type: "website",
  },
};

export default function OurWorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
