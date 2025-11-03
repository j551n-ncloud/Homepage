import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Johannes Nguyen | IT Technician & Homelab Enthusiast",
  description:
    "Portfolio site for Johannes Nguyen showcasing expertise in system administration, DevOps, virtualization, and homelab projects.",
  metadataBase: new URL("https://j551n.com"),
  openGraph: {
    title: "Johannes Nguyen | IT Technician & Homelab Enthusiast",
    description:
      "Explore career history, expertise, services, and homelab insights from Johannes Nguyen, an IT specialist focused on Linux and infrastructure.",
    url: "https://j551n.com",
    siteName: "Johannes Nguyen",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Johannes Nguyen | IT Technician & Homelab Enthusiast",
    description:
      "Portfolio for Johannes Nguyen, a system administrator, DevOps practitioner, and homelab enthusiast.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrains.variable} font-sans`}> 
        <AppProviders>
          <div className="flex min-h-screen flex-col bg-background text-foreground">
            <Navbar />
            <main className="flex-1 pt-20 lg:pt-24">{children}</main>
            <Footer />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
