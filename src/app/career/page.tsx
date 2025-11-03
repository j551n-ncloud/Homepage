import type { Metadata } from "next";
import CareerPage from "@/components/pages/CareerPage";

export const metadata: Metadata = {
  title: "Career History | Johannes Nguyen",
  description:
    "Explore Johannes Nguyen's career journey from automotive mechanics to IT system integration and infrastructure.",
};

export default function Career() {
  return <CareerPage />;
}
