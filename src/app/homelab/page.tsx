import type { Metadata } from "next";
import HomelabPage from "@/components/pages/HomelabPage";

export const metadata: Metadata = {
  title: "My Homelab | Johannes Nguyen",
  description:
    "Take a detailed tour through Johannes Nguyen's three-node Proxmox homelab, including hardware specs and shared infrastructure.",
};

export default function Homelab() {
  return <HomelabPage />;
}
