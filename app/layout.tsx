import "../styles/globals.css"
import Navbar from "./Navbar";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center py-16 px-4 md:px-8 lg:px-16 mt-16">
        <Navbar />
        {children}
      </body>

      {/* <main className="flex flex-col items-center py-16 px-4 md:px-8 lg:px-16 mt-16">
        {children}
      </main> */}
    </html>
  );
}