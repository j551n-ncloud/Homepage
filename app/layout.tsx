import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Johannes Nguyen",
  description: "IT Technician & Homelab Enthusiast. Apprentice IT Specialist at DKFZ.",
  metadataBase: new URL("https://j551n.com"),
  openGraph: {
    title: "Johannes Nguyen",
    description: "IT Technician & Homelab Enthusiast. Apprentice IT Specialist at DKFZ.",
    url: "https://j551n.com",
    siteName: "Johannes Nguyen",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Johannes Nguyen",
    description: "IT Technician & Homelab Enthusiast. Apprentice IT Specialist at DKFZ.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body style={{ fontFamily: "var(--font-inter), 'Helvetica Neue', Helvetica, sans-serif" }}>
        <link rel="preload" as="image" href="/bg.jpg" />
        {children}
      </body>
    </html>
  );
}
