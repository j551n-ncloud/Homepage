import type { Metadata } from "next";
import LegalNoticePage from "@/components/pages/LegalNoticePage";

export const metadata: Metadata = {
  title: "Legal Notice (Impressum) | Johannes Nguyen",
  description:
    "Legal notice for Johannes Nguyen's portfolio website, including contact details and disclaimers.",
};

export default function LegalNotice() {
  return <LegalNoticePage />;
}
