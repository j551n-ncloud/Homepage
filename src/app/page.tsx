import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "Homepage | Johannes Nguyen",
  description:
    "Discover Johannes Nguyen's portfolio, including expertise in system administration, DevOps, and homelab services.",
};

export default function Page() {
  return <HomePage />;
}
