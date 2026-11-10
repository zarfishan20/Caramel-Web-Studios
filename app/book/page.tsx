import type { Metadata } from "next";
import BookingClient from "./BookingClient";

export const metadata: Metadata = {
  title: "Book a Free Website Review",
  description:
    "Arrange a free 30-minute website review with Caramel Web Studios. Discuss your London accounting firm's website, client journey and practical improvements.",
  alternates: {
    canonical: "/book",
  },
};

export default function BookPage() {
  return <BookingClient />;
}
