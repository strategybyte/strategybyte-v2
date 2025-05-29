import "./globals.css";
import "aos/dist/aos.css";
import { Epilogue } from "next/font/google";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "Onovo - Creative Portfolio Agency",
  description:
    "Creative studio at the intersection of art, design and technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/fonts/flaticon_ridda.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className={epilogue.className}>{children}</body>
    </html>
  );
}
