import "@styles/globals.css";

import { ThemeProvider } from "@components/providers/ThemeProvider";

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
    <html lang="en">
      <body>
        <main>
          <ThemeProvider>{children}</ThemeProvider>
        </main>
      </body>
    </html>
  );
}
