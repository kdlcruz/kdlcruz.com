import Navbar from "@/components/NavBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "kdlcruz career",
  description: "Working with awesome people and building cool things!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
