import "./globals.css";
import { Inter } from "next/font/google";
import React, { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://malgorzata-stano.netlify.app"),
  title: {
    default: "Malgorzata Stano | Frontend Developer Portfolio",
  },
  description:
    "Portfolio of Malgorzata (Gosia) Stano — Frontend Developer based in Barcelona, crafting responsive, user-friendly web applications with React, Next.js, and Tailwind.",
  keywords: [
    "Malgorzata Stano",
    "Gosia Stano",
    "Frontend Developer",
    "React Developer",
    "Next.js Portfolio",
    "Web Developer Barcelona",
    "Tailwind Developer",
    "TypeScript Developer",
  ],
  authors: [
    { name: "Malgorzata Stano", url: "https://malgorzata-stano.netlify.app" },
  ],
  creator: "Malgorzata Stano",
  publisher: "Malgorzata Stano",
  openGraph: {
    title: "Malgorzata Stano | Frontend Developer Portfolio",
    description:
      "Frontend Developer based in Barcelona. Building sleek, functional web apps using React, Next.js, and Tailwind.",
    url: "https://malgorzata-stano.netlify.app",
    siteName: "Malgorzata Stano Portfolio",
    locale: "en_US",
    type: "website",
  },
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
      <body
        className={`${inter.className} bg-[#000000] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
