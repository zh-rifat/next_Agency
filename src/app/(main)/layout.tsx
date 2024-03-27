import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Provider } from "react-redux";
import { store } from "@/utils/store";
import ReduxProvider from "@/utils/providers/ReduxProvider";
import Header from "@/components/Header";

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
          <main className="">
            <Header/>
            {children}
          </main>
        </ReduxProvider>  
        
      </body>
    </html>
  );
}
