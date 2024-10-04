import type { Metadata } from "next";

import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


export const metadata: Metadata = {
  title: "Travel APP",
  description: "Travel  UI/UX camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        
        <main className="relative overflow-hidden" >
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
