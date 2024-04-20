import { Inter } from "next/font/google";
import { Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weights: "variable",
  variable: "--inter",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weights: "variable",
  variable: "--newsreader",
});

export const metadata = {
  title: "Website/AWS-EC2",
  description: "NextJs website for AWS EC2 instance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${newsreader.variable}`}>{children}</body>
    </html>
  );
}
