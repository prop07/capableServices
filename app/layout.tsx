'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import { ToastContainer } from "react-toastify";


import ServiceProvider from "../context/ServiceProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";


//components
import NavBar from "./components/NavBar"
import Footer from "./components/Footer";
import NewsLetter from "./components/NewsLetter";
import SocialNav from "./components/SocialNav";
import Testimonial  from "./components/Testimonial";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <ServiceProvider>
      <body className={inter.className}>
        <NavBar />
        <SocialNav/>
        <Suspense fullback={<Loading />}>
        <main className="md:pt-20 pt-[112px]" >{children}</main>
        </Suspense>
        <NewsLetter/>
        <Testimonial/>
        <Footer />
      </body>
        </ServiceProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
