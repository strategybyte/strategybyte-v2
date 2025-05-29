import "./globals.css";
import { Epilogue } from "next/font/google";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "StrategyByte",
  description:
    "Creative studio at the intersection of art, design and technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={epilogue.className}>{children}</body>
    </html>
  );
}
