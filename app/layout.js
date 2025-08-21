import "./globals.css";
import { Roboto } from "next/font/google";
import { Noto_Sans } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });
const noto_sans = Noto_Sans({ subsets: ["latin"], variable: "--font-noto_sans" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        cz-shortcut-listen="true"
        className={`${roboto.variable} ${noto_sans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
