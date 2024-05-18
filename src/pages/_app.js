import '@/styles/globals.css'
import {Montserrat} from 'next/font/google'
import Head from "next/head";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";


const montserrat = Montserrat ({
  subsets:['latin'],
  variable:"--font-mont"
})

export default function App({ Component, pageProps }) {
  return (
      <>
          <Head>
              <title>Create Next App</title>
              <meta name="description" content="Generated by create next app" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />

          </Head>
          <NavBar/>
          <main className = {`${montserrat.variable} font-mont bg-light w-full min-h-screen dark:bg-dark`}>
              <Component {...pageProps} />
          </main>
          <Footer/>
      </>

      )
}
