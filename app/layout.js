
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import PrelineScript from "./components/PrelineScript";

import { Lato as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight:['300', '400', '700'],
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
         
         <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
          <Navbar/>
       
        {children}
        <PrelineScript />
        <Footer/>
        
        </body>
    </html>
  );
}
