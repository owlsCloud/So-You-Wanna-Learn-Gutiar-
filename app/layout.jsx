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
        <nav className="flex justify-center">
          <ul className="flex m-auto gap-4 py-2">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/chords">Chords</a>
            </li>
            <li>
              <a href="/excersizes">Excersizes</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
