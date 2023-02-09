import "../styles/globals.css"
import Navbar from "./Navbar";
import Providers from "./providers";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-100">
        <Providers>
          <Navbar />
          <div className="flex flex-col items-center pt-32 pb-16 px-4 md:px-8 lg:px-16">
              {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}