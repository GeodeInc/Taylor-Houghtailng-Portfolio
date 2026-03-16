import type { Metadata } from "next";
import { Poppins, Geist_Mono, Chango, Jua } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const chango = Chango({
  variable: "--font-name",
  subsets: ["latin"],
  weight: "400",
});

const jua = Jua({
  variable: "--font-sub",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taylor Houghtaling's Portfolio",
  description: "Full Stack Developer & Creative Technologist building extraordinary digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${poppins.variable} ${chango.variable} ${jua.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
