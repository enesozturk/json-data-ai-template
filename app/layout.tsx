import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Inter } from "next/font/google";
import ReactQueryProvider from "@/providers/react-query";
import { Toaster } from "@/components/ui/toaster";

import Script from "next/script";
import { cn } from "@/lib/utils";
import { Column } from "@/components/ui/column";
import Footer from "@/components/footer";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

const title = "JSON Data AI";
const description = "Get JSON data about anything depending on your prompt";

export const metadata: Metadata = {
  metadataBase: new URL("https://jsondataai.com"),
  title,
  description,
  openGraph: {
    title,
    description,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("selection:bg-secondary", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ReactQueryProvider>
            <Toaster />
            <Column className="w-full p-4 pb-0 items-center min-h-screen">
              <div className="max-w-7xl w-full mx-auto flex-1 flex flex-col items-center">
                {children}
              </div>
              <Footer />
            </Column>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
