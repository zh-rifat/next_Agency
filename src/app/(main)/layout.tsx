import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Provider } from "react-redux";
import { store } from "@/utils/store";
import ReduxProvider from "@/utils/providers/ReduxProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neuronite",
  description: "Programming and specialized software skill development club of KUET.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
            <Header/>
          <main className="min-h-screen  bg-gray-100">
            {children}
          </main>
            <Footer/>
        </ReduxProvider>  
        
      </body>
    </html>
  );
}
