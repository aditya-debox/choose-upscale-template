import type { Metadata } from "next";
import "./globals.css";
// import { Karla, Tenor_Sans } from "@next/font/google";


export const metadata: Metadata = {
  title: "Restaurant Menu",
  description: "Created by choose",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-bgColor"
      >
        {children}
      </body>
    </html>
  );
}
