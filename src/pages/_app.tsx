import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Rubik } from "next/font/google";
import { ThemeProvider } from "next-themes";

const rubik = Rubik({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-rubik",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <main className={`${rubik.variable} font-sans dark`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
