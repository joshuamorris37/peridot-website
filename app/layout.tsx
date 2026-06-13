import type { Metadata, Viewport } from "next";
import { Figtree, Petrona, Caveat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Self-hosted via next/font — no runtime call to Google. (Hard brand rule.)
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-figtree",
  display: "swap",
});
const petrona = Petrona({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-petrona",
  display: "swap",
});
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://peridot.app"),
  title: {
    default: "Peridot — Your cycle is nobody's business.",
    template: "%s · Peridot",
  },
  description:
    "A privacy-first, pay-once period tracker. Everything stays on your phone. No account, no server, no subscription — one tool, bought once, yours forever.",
  applicationName: "Peridot",
  openGraph: {
    title: "Peridot — Your cycle is nobody's business.",
    description:
      "A period tracker that keeps everything on your phone. No account, no server, no subscription. Pay once, own it forever.",
    siteName: "Peridot",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Peridot — Your cycle is nobody's business.",
    description:
      "A privacy-first, pay-once period tracker. No account, no server, no subscription.",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

// Gate the hero cold-open to once per session, set before first paint so there's
// no flash and it never replays on client-side navigation back home.
const heroGate = `(function(){try{
  var d=document.documentElement;
  var r=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!r&&!sessionStorage.getItem('pd-hero')){
    sessionStorage.setItem('pd-hero','1');
    d.classList.add('pd-animate');
    setTimeout(function(){d.classList.add('pd-settled');d.classList.remove('pd-animate');},2600);
  }
}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${petrona.variable} ${caveat.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: heroGate }} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
