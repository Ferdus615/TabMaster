import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TabMaster",
  description:
    "TabMaster, Develpoed by Ferdus Rhaman Khan. For NDF BD(National Debate Federation Bangladesh)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <nav>Navbar</nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2023 Ferdus Rhaman Khan</p>
        </footer>
      </body>
    </html>
  );
}
