import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Sanātana Vṛkṣa",
    default: "Sanātana Vṛkṣa",
  },
  description:
    "Sanātana Vṛkṣa is a spiritual platform for sacred poojas, homas, samskaras, classes, and dharmic growth.",
  keywords: [
    "Sanatana Vriksha",
    "pooja",
    "homa",
    "samskara",
    "Hindu rituals",
    "Vedic classes",
    "dharma",
    "spiritual growth",
  ],
  icons: {
    icon: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
