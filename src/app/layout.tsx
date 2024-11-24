import type { Metadata } from "next";
import Link from "next/link";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "My first Next JS app, a chatgpt one",
  description: "ChatGPT, em-powered by NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} px-2 md:px-5 antialiased`}
      >
        <header className="text-white font-bold bg-green-900 text-2xl">
          <div className="flex flex-grow"></div>
          <Link href={"/"} className="font-light">Chat GPt</Link>
          <Link href={"/about"} className="ml-5 font-light">About</Link>
        </header>
        <div className="flex flex-col md:flex-row">
          <div className="flex-grow">{children}</div>
        </div>
        
      </body>
    </html>
  );
}
