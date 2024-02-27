'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//context
import ServiceProvider from "../context/ServiceProvider";

//components
import NavBar from "./components/NavBar"
import Footer from "./components/Footer";
import NewsLetter from "./components/NewsLetter";
import SocialNav from "./components/SocialNav";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body   className={inter.className}>
        <ServiceProvider>
        <NavBar />
        <SocialNav/>
        <main >{children}</main>
        <NewsLetter/>
        <Footer />
        </ServiceProvider>
      </body>
    </html>
  );
}
