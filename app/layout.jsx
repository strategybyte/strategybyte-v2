import "./globals.css";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Epilogue } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// import { GoogleTagManager } from "@next/third-parties/google";
// import { GoogleAnalytics } from "@next/third-parties/google";
// import FacebookPixel from "@/components/global/analytics/FacebookPixel";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "StrategyByte | NDIS Marketing Solutions",
  description:
    "Unlock growth with StrategyByte's NDIS marketing services. We provide targeted campaigns, social media management, and accessible website development to help providers engage participants and enhance visibility.",
  // robots: "index, follow",
  // authors: [{ name: "StrategyByte" }],
  // metadataBase: new URL("https://www.strategybyte.com.au"),
  // other: {
  //   "google-site-verification": "6KrExW695KwVxpue3F1Dx2gbRivzs5AhNTCSb3Ukyxo",
  // },
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
        {/* <GoogleTagManager gtmId="GTM-NQ4XR9DR" />
        <GoogleAnalytics gaId="G-Q19GXLWXRB" /> */}
        {/* <FacebookPixel pixelId="699084809185518" /> */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
