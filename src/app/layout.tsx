import "@styles/globals.css";

import { ThemeProvider } from "@components/providers/ThemeProvider";
import { Navbar } from "@components/Navbar";

export const metadata = {
  title: "norbertmerkli.dev",
  description: "Dev portfolio",
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
          <main className="pt-14">
            <Navbar />
            {children}
          </main>
        </body>
      </html>
    </ThemeProvider>
  );
}
