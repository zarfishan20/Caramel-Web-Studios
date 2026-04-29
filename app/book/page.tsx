import type { Metadata } from "next";
import BookingClient from "./BookingClient";

export const metadata: Metadata = {
  title: "Book a Free Review | Caramel Web Studios",
  description:
    "Book a free 30-minute website review with Caramel Web Studios. We'll audit your accounting firm's online presence and show you what's possible.",
};

export default function BookPage() {
  return <BookingClient />;
}
