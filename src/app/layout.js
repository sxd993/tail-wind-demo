import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

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
        <Footer/>
      </body>
    </html>
  );
}
