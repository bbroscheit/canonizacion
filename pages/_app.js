import "@/styles/globals.css";
import Header from "@/pages/components/Header";
import Footer from "@/pages/components/Footer";

export default function App({ Component, pageProps }) {
  return (
  <>
    <Header />
    <main>
      <Component {...pageProps} />
    </main>
    <Footer />
  </>
  )
}
