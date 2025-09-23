import "./globals.css";
import { Inter } from "next/font/google";
import React, { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Malgorzata Stano Portfolio",
  description:
    "Portfolio of Malgorzata Stano, a Frontend Developer based in Spain.",
  icons: {
    icon: "/images/favicon.ico",
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
