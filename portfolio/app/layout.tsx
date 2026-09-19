import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pich Chesda — Data Engineer",
  description:
    "Portfolio of Pich Chesda , a Data engineer building modern, responsive, and user-friendly web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-void text-primary">{children}</body>
    </html>
  );
}
