import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import localFont from "next/font/local";

const satoshi = localFont({
  src: "../assets/fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
  weight: "300 900",
});

export const metadata: Metadata = {
  title: "Octopus Website",
  description: "Welcome to the Octopus Website",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://octopus-zuru.vercel.app",
  ),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${satoshi.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
