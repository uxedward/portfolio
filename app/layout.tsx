import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { Footer } from "@/components/footer";
import { Sidebar } from "@/components/sidebar";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s — Edward",
  },
  description: site.description,
  authors: [{ name: site.fullName, url: site.url }],
  creator: site.fullName,
  keywords: [
    "Edward Sudjono",
    "UX Edward",
    "product designer",
    "tiket.com",
    "Figma",
    "Jakarta",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: "Edward",
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      id="top"
      className={`${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper font-sans text-ink">
        <Sidebar />
        <div className="vt-main min-h-full bg-paper pt-14 lg:pl-[var(--sidebar-w)] lg:pt-0">
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
