import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Load the font
const nunito = Nunito({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "HUDO",
  description: "Calm, reliable software for Business Enterprises.",
  icons: {
    icon: "/favicon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
