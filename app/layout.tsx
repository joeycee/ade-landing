import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ade — Quoting that wins jobs",
  description:
    "Create fast, professional quotes and invoices with clean PDFs and a modern workflow built for tradies.",
  metadataBase: new URL("https://ade.co.nz"),
  openGraph: {
    title: "Ade — Quoting that wins jobs",
    description:
      "Fast quotes, clean invoices, beautiful PDFs. Built for tradies.",
    url: "https://ade.co.nz",
    siteName: "Ade",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F6F8FC] text-[#0B1220] antialiased">        
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
