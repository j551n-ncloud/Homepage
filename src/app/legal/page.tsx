import type { Metadata } from "next";
import LegalPage from "@/components/pages/LegalPage";

export const metadata: Metadata = {
  title: "Legal Information | Johannes Nguyen",
  description:
    "Access the privacy statement and legal notice for Johannes Nguyen's portfolio website.",
};

export default function Legal() {
  return <LegalPage />;
}
