import "@styles/globals.css";

import { Metadata } from "next";

import { ThemeProvider } from "@components/providers/ThemeProvider";
import { Navbar } from "@components/Navbar";

const title = "Norbert Merkli";
const description = "Full-stack web developer.";

export const metadata: Metadata = {
  title: "norbertmerkli.dev",
  description: "My developer portfolio",
  metadataBase: new URL("https://www.norbertmerkli.dev"),
  alternates: {
    canonical: "https://www.norbertmerkli.dev",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://www.norbertmerkli.dev",
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

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  url: "https://www.norbertmerkli.dev",
  logo: "https://www.norbertmerkli.dev/logo.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <main id="page-top">
            <Navbar />
            {children}
          </main>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
