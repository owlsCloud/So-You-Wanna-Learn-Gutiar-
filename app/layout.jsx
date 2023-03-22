import { Montserrat } from "@next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <nav>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Chords</a>
          </li>
          <li>
            <a href="">Excersizes</a>
          </li>
        </nav>
        {children}
      </body>
    </html>
  );
}
