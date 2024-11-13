import type { Metadata } from "next";
import {  Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk(
  { 
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
  },

);

export const metadata: Metadata = {
  title: "Skill Level",
  description: "The first-class out of school activities app for early childhood",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
		{/* I will need to place the logo here for all pages at the top left corner */}
		<body className={spaceGrotesk.className}>
        {children}
      </body>
    </html>
  );
}
