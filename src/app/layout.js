import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist( {
  variable: "--font-geist-sans",
  subsets: [ "latin" ],
} );

const geistMono = Geist_Mono( {
  variable: "--font-geist-mono",
  subsets: [ "latin" ],
} );

export const metadata = {
  title: {
    default: "Nextni — Mahsulotlar do'koni",
    template: "%s | Nextni",
  },
  description:
    "Nextni — zamonaviy mahsulotlar do'koni. iPhone, Samsung, Xiaomi va boshqa brendlarning eng so'nggi modellarini toping.",
  keywords: [
    "mahsulotlar",
    "do'kon",
    "iPhone",
    "Samsung",
    "Xiaomi",
    "smartfon",
    "online do'kon",
  ],
  authors: [ { name: "Nextni" } ],
  creator: "Nextni",
  publisher: "Nextni",
  openGraph: {
    title: "Nextni — Mahsulotlar do'koni",
    description:
      "Zamonaviy mahsulotlar do'koni. iPhone, Samsung, Xiaomi va boshqa brendlarning eng so'nggi modellarini toping.",
    url: "https://nextni.uz",
    siteName: "Nextni",
    images: [
      {
        url: "https://nextni.uz/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nextni — Mahsulotlar do'koni",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nextni — Mahsulotlar do'koni",
    description:
      "Zamonaviy mahsulotlar do'koni. iPhone, Samsung, Xiaomi va boshqa brendlarning eng so'nggi modellarini toping.",
    images: [ "https://nextni.uz/og-image.jpg" ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL( "https://nextni.uz" ),
  alternates: {
    canonical: "/",
    languages: {
      "uz-UZ": "/",
    },
  },
};

export default function RootLayout( { children } ) {
  return (
    <html
      lang="uz"
      className={ `${ geistSans.variable } ${ geistMono.variable } h-full antialiased` }
    >
      <body className="min-h-full flex flex-col bg-gray-50">
        <header className="bg-white shadow-sm p-4">
          <nav className="flex gap-4 max-w-4xl mx-auto" aria-label="Asosiy navigatsiya">
            <Link href="/" className="hover:text-blue-500 transition-colors">
              Home
            </Link>
            <Link href="/abaut" className="hover:text-blue-500 transition-colors">
              About
            </Link>
          </nav>
        </header>

        <main className="flex-1 max-w-4xl w-full mx-auto p-4">
          { children }
        </main>

        <footer className="bg-white border-t p-4 text-center text-gray-500">
          &copy; { new Date().getFullYear() } Nextni. Barcha huquqlar himoyalangan.
        </footer>
      </body>
    </html>
  );
}