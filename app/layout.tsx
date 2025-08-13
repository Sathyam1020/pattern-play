import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PatternPlay - Beautiful Background Patterns',
  description: 'Browse, preview, and copy beautiful CSS background patterns for your web projects. Built with Next.js and Tailwind CSS.',
  keywords: 'CSS patterns, background patterns, web design, tailwind css, react patterns',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}