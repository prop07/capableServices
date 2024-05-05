'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";

//context
import ServiceProvider from "../context/ServiceProvider";

//components
import NavBar from "./components/NavBar"
import Footer from "./components/Footer";
import NewsLetter from "./components/NewsLetter";
import SocialNav from "./components/SocialNav";
import { Testimonials } from "./components/Testimonials";

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
        <Suspense fullback={<Loading />}>
        <main >{children}</main>
        </Suspense>
        <NewsLetter/>
        <Testimonials/>
        <Footer />
        </ServiceProvider>
      </body>
    </html>
  );
}
