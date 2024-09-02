import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/NavBar";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Next js modulo",
  description: "Aplikasi Pembelajaran Next Js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
