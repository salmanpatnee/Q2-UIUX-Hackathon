import { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Footer from "./Footer";
import { GlobalProvider } from "./GlobalProvider";
import "./globals.css";
import Header from "./Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Home | QuickFood",
  description: "Discover homemade, hygienic, and affordable meals delivered straight to your office. Our daily-changing menu of authentic Pakistani cuisine lets you pre-order your favorite dishes. Experience fresh, wholesome meals crafted with care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <GlobalProvider>
          <Header />
          <main>
            {children}
            {/* <SanityLive/> */}
          </main>
          <Footer />
        </GlobalProvider>
        <Toaster />
      </body>
    </html>
  );
}
