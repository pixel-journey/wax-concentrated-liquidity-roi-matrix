import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Fees minus a price move',
  description: 'Caller-supplied fees minus full-range IL. Not a forecast and not historical volume.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
