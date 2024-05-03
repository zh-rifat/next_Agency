import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import "@/app/styles.css";
import { Provider } from "react-redux";
import { store } from "@/utils/store";
import ReduxProvider from "@/utils/providers/ReduxProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fauz",
  description: "AI powered startup",
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
          <ThemeProvider defaultTheme="dark" attribute="class"
            enableSystem={false}
            storageKey='z-theme'>

            <Header/>
            <main className="min-h-screen bg-background main-content">
              {children}
            </main>
            <Footer/>
          </ThemeProvider>
        </ReduxProvider>  
        
      </body>
    </html>
  );
}
