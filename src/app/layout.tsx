import type { Metadata } from "next";
import localFont from "next/font/local";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import Contacts from "@/components/contacts";
import { Analytics } from "@vercel/analytics/react";

const nsBold = localFont({
  src: "./fonts/neutral_sans_bold.woff2",
  variable: "--font-ns-bold",
  weight: "100 900",
});

const nsRegular = localFont({
  src: "./fonts/neutral_sans_regular.woff2",
  variable: "--font-ns-regular",
  weight: "100 900",
});

const manrope = Manrope({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sadaf",
  description:
    "A Full Stack Developer, Problem Solver and Computer Science student at NMIT, Bengaluru. Passionate about building scalable applications and creating impactful tech solutions.",

    icons: "/favicon.ico",
  openGraph: {  
    type: "website",
    title: "Sadaf",
    description:
      "A Full Stack Developer, Problem Solver and Computer Science student at NMIT, Bengaluru. Passionate about building scalable applications and creating impactful tech solutions.",
    images: [
      {
        url: "https://st.depositphotos.com/46079520/55081/v/450/depositphotos_550815354-stock-illustration-eaw-letter-logo-design-white.jpg",
        alt: "og-image-for-home-page",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${nsRegular.variable} ${nsBold.variable} font-primary antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="max-w-4xl mx-auto">
            <section className="md:px-4">
              <div className="border-x-2 min-h-screen max-h-fit py-8">
                {children}
              </div>
              <Contacts />
            </section>
          </main>
        </ThemeProvider>
        <Analytics />
        <Script
          async
          src="favicon.js"
        ></Script>
      </body>
    </html>
  );
}
