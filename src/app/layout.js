import { Poppins } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export const metadata = {
  title: "Blake Harris - Junior Software Developer",
  description: "Junior Android developer working in GPS",
  metadataBase: new URL("https://blakeharris.dev"),
  openGraph: {
    title: "Blake Harris - Junior Software Developer",
    description: "Junior Android developer working in GPS",
    url: "https://blakeharris.dev",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className={poppins.variable}>
        <Navbar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
