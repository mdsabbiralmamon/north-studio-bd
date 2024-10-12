import type { Metadata } from "next";
import { Questrial } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";

const questrial = Questrial({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "North Studio | Architect Firm",
  description: "North Studio is a leading architectural firm offering innovative design solutions for residential, commercial, and public spaces.",
  keywords: "architect, interior design, architecture firm, design, North Studio, residential design, commercial design, building solutions, architectural services",
  authors: [{ name: "North Studio", url: "https://northstudiobd.com" }],
  openGraph: {
    title: "North Studio | Architect Firm",
    description: "Innovative architectural design solutions by North Studio for your residential, commercial, and public spaces.",
    url: "https://northstudiobd.com",
    images: [
      {
        url: "https://northstudiobd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.7a427b5f.png&w=1080&q=75",
        width: 1080,
        height: 1080,
        alt: "North Studio Architect Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={questrial.className}>
        <header>
          <Navbar />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
