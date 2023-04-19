import "@styles/globals.css";

import { ThemeProvider } from "@components/providers/ThemeProvider";
import { Navbar } from "@components/Navbar";
import { Metadata } from "next";

const title = "Norbert Merkli";
const description = "Full-stack web developer.";
const ogImage = "https://norbertmerkli.dev/og";

export const metadata: Metadata = {
  title: "norbertmerkli.dev",
  description: "My developer portfolio",
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://norbertmerkli.dev",
    images: {
      url: ogImage,
      alt: "Personal logo",
    },
    siteName: "norbertmerkli.dev",
  },
  twitter: {
    title,
    description,
    site: "@Norbert_Merkli",
    card: "summary_large_image",
    images: [ogImage],
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
