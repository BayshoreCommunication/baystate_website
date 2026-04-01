import type { Metadata } from "next";
import "./globals.css";

import { Josefin_Sans } from "next/font/google";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

/* ---------------- METADATA ---------------- */

/* ---------------- METADATA ---------------- */

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tripvienlaw.com"),
  title: "Baystate",
  description: "Baystate Website",
  openGraph: {
    title: "Baystate",
    description: "Trip Vien Website",
    url: "https://www.tripvienlaw.com/",
    siteName: "Baystate",
    locale: "en_US",
    type: "website",
  },
};

/* ---------------- ROOT LAYOUT ---------------- */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={josefin.className}>
        <Header />

        {/* ✅ CLIENT WRAPPER */}
        {/* <ClientLayout> */}
        <main>{children}</main>
        {/* </ClientLayout> */}

        <Footer />
      </body>
    </html>
  );
}
