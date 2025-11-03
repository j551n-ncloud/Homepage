import type { Metadata } from "next";
import LegalPrivacyPage from "@/components/pages/LegalPrivacyPage";

export const metadata: Metadata = {
  title: "Privacy Statement | Johannes Nguyen",
  description:
    "Find out how Johannes Nguyen handles personal data, including GDPR-compliant processes and visitor rights.",
};

export default function LegalPrivacy() {
  return <LegalPrivacyPage />;
}
