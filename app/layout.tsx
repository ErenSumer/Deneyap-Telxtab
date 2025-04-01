import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LinguaLeap - Master Any Language with AI",
  description:
    "Experience the future of language learning with our cutting-edge AI platform. Personalized lessons, real-time feedback, and immersive practice await you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
