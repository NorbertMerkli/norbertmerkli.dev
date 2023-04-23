import "@styles/globals.css";

import { Metadata } from "next";

import { ThemeProvider } from "@components/providers/ThemeProvider";
import { Navbar } from "@components/Navbar";

const title = "Norbert Merkli";
const description = "Full-stack web developer.";

export const metadata: Metadata = {
  title: "norbertmerkli.dev",
  description: "My developer portfolio",
  alternates: {
    canonical: "https://norbertmerkli.dev",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://norbertmerkli.dev",
    images: {
      url: "/og-image.jpg",
      alt: "Personal logo",
      type: "image/jpeg",
      width: 1200,
      height: 630,
    },
    siteName: "norbertmerkli.dev",
  },
  twitter: {
    title,
    description,
    site: "@Norbert_Merkli",
    card: "summary_large_image",
    images: [
      {
        url: "/twitter-card-image.jpg",
        alt: "Personal logo",
        type: "image/jpeg",
        width: 1024,
        height: 512,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body>
          <main id="page-top">
            <Navbar />
            {children}
          </main>
        </body>
      </html>
    </ThemeProvider>
  );
}
