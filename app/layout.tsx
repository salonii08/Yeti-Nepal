import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import './globals.css';
import Nav from "./Components/Home/Navbar/Nav";

const font= Space_Mono({
  weight:['400','700'],
  subsets:['latin'],
})

export const metadata: Metadata = {
  title: "Yeti Nepal",
  description: "No. 1 tech company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased bg-[#0A0A0A]`}
      >
        {<Nav/>}
        {children}
      </body>
    </html>
  );
}
