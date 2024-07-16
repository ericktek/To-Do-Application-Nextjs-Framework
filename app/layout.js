import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "To Do Application",
  description: "Simple toDo application",
};

export default function RootLayout({ children }) {
  return (
    <html className="flex flex-col h-screen" lang="en">
      <body className={inter.className}>{
      
      children}
      
      </body>
    </html>
  );
}
