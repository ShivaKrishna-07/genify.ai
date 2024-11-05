import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Genify.ai",
  description: "An AI powered free content Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    
    <ClerkProvider>
      <html>
        <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        </head>
        <body className={outfit.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
