import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/NavBar";
import { ThemeModeScript } from "flowbite-react";

export const metadata: Metadata = {
  title: "kdlcruz (Kevin Jay Dela Cruz)",
  description:
    "kdlcruz portfolio and tools to help you build your software problems. A Software ninja for hire!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body>
        <div className="h-screen flex flex-col">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
