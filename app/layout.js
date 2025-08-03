import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import { Toaster } from "sonner";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vehiql",
  description: "Find your dream Car",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Header/>
          <main className="min-h-screen">{children}</main>
          <Toaster richColors/>
          <footer>
            {" "}
            <div className="container mx-auto px-4 text-center text-gray-600 space-y-3">
              <p className="text-sm">Made with 💖 by Praful Gahlot</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
