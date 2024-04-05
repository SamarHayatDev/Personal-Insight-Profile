import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Samar Hayat",
  description: "Personal Insight Profile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-main text-white`}>
        {children}
      </body>
    </html>
  );
}
