import "./globals.css";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Epilogue } from "next/font/google";
import Header from "@/components/Header";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const FacebookPixel = dynamic(
  () => import("@/components/global/analytics/FacebookPixel"),
  { ssr: false }
);

import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "sonner";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "StrategyByte | Digital Marketing Agency in Australia",
  description:
    "Smart digital marketing, SEO, web development, and content solutions to help Australian businesses grow and stand out online.",
  robots: "index, follow",
  authors: [{ name: "StrategyByte" }],
  metadataBase: new URL("https://www.strategybyte.com.au"),
  other: {
    "google-site-verification": "6KrExW695KwVxpue3F1Dx2gbRivzs5AhNTCSb3Ukyxo",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.strategybyte.com.au" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/fonts/flaticon_ridda.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body className={epilogue.className}>
        <Toaster position="top-center" richColors />
        <GoogleTagManager gtmId="GTM-NQ4XR9DR" />
        <GoogleAnalytics gaId="G-Q19GXLWXRB" />
        <FacebookPixel pixelId="699084809185518" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
