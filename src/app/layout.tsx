import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import styles from "./layout.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Modern Podcast",
  description: "A sleek modern podcast website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <div className={styles.container}>
          <header className={styles.header}>
            <div className={styles.logo}>
              <Link href="/">PodcastLogo</Link>
            </div>
            <nav className={styles.nav}>
              <Link href="/">Home</Link>
              <Link href="/episodes">Episodes</Link>
              <Link href="/faq">FAQ</Link>
            </nav>
          </header>
          <main className={styles.main}>{children}</main>
          <footer className={styles.footer}>
            &copy; {new Date().getFullYear()} Modern Podcast. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
