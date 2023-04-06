import "@styles/globals.css";

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
    <html lang="en" className="overflow-hidden">
      <body className="bg-gradient h-screen overflow-x-hidden overflow-y-scroll">
        {children}
      </body>
    </html>
  );
}
