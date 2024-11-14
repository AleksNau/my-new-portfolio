import '@/styles/globals.css'
import {Montserrat} from 'next/font/google'
import Head from "next/head";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {AnimatePresence} from "framer-motion";
import {useRouter} from "next/router";


const montserrat = Montserrat ({
  subsets:['latin'],
  variable:"--font-mont"
})

export default function App({ Component, pageProps }) {
    const router = useRouter();
  return (
      <>
          <Head>
              <title>AlexNow</title>
              <meta name="description" content="Мой сайт портфолио" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta name="yandex-verification" content="a420497eee0b3bf4" />
              <meta name="google-site-verification" content="hxo6qQ3moS2yHplomfTEmDOt_qr7ri_QTHHdk14mgBo" />
              <link rel="icon" href="/favicon.ico" />
              <link rel="canonical" href="https://alexnow.pro" />
              <meta name="keywords" content="Next.js,React,Portfolio,Frontend,Developer" />
              <meta name="referrer" content="origin-when-cross-origin" />
              <meta name="creator" content="Alex Now" />

          </Head>
          <NavBar/>
          <main className = {`${montserrat.variable} font-mont bg-light w-full min-h-screen dark:bg-dark`}>
              <AnimatePresence mode={'wait'}>
                  <Component key={router.asPath} {...pageProps} />
              </AnimatePresence>

          </main>
          <Footer/>
      </>

      )
}
