import "./globals.css";
import Header from "./components/Header/Header";

export const metadata = {
  title: "TailWind Demo",
  description: "try try try",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
