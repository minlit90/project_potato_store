import type { Metadata } from "next";
import "./globals.css";
import Header from "@/component/Header/Header";

export const metadata: Metadata = {
  title: "POTATO STORE",
  description: "vegetable - potatos, tomatos, apples",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
            <Header></Header>
            {children}
      </body>
    </html>
  );
}
