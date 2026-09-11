import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BioTrack Health | Advanced 100+ Biomarker Longevity Protocol",
  description: "Identify hidden biological risks, cellular aging, and metabolic deficiencies. Take the 60-Second AI Health Assessment for personalized biomarker protocols.",
  keywords: "blood test, biomarker scanning, longevity protocol, preventative healthcare, full body blood test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18012920683"
        />
        <Script id="google-tag-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18012920683');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-[#08090a] text-slate-100 selection:bg-emerald-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
