'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import { ToastContainer } from "react-toastify";
import { usePathname } from "next/navigation";
import 'react-toastify/dist/ReactToastify.css';

import ServiceProvider from "../context/ServiceProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

// Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NewsLetter from "./components/NewsLetter";
import SocialNav from "./components/SocialNav";
import Testimonial from "./components/Testimonial";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <ServiceProvider>
          <body className={inter.className}>
            <ToastContainer position="top-center" />
            <NavBar />
            <SocialNav />
            <Suspense fallback={<Loading />}>
              <main className="">{children}</main>
            </Suspense>
            {
              pathname.includes("/review") ? null : (
                <div>
                  <NewsLetter />
                  <Testimonial />
                </div>
              )
            }
            <Footer />
          </body>
        </ServiceProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
