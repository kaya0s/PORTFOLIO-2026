import type { Metadata } from "next";
import { Outfit, Shippori_Mincho } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const sans = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const shipporiMincho = Shippori_Mincho({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-shippori",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "kayaos | Portfolio",
  description: "Modern, scroll-driven portfolio of kayaos. Specialized in Full Stack Development and exploring technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body
        className={`${sans.variable} ${shipporiMincho.variable} antialiased overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="noise" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
