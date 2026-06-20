import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairEffect from "@/components/StairEffect";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weights: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

// Hey
export const metadata = {
  title: "Matjaž Gazvoda",
  description: "Portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable}  antialiased`}>
        <Header />
        <StairEffect />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
