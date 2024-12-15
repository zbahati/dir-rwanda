import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import { NavigationMenuDemo } from "@/components/NavLink";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "dirwa",
  description: "DIRWA is NGO works in countries like Rwanda and Dr congo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn('font-sans antialiased', `${geistSans.variable} ${geistMono.variable}`)}
      >
          <Header />
          <NavigationMenuDemo/>
          <div>
            {children}
          </div>
          <Footer/>
      </body>
    </html>
  );
}
