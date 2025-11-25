import type { Metadata } from "next";
import ExpertisePage from "@/components/pages/ExpertisePage";

export const metadata: Metadata = {
  title: "My Expertise | Johannes Nguyen",
  description:
    "Detailed overview of Johannes Nguyen's skills across system administration, DevOps, virtualization, and infrastructure.",
};

export default function Expertise() {
  return <ExpertisePage />;
}
