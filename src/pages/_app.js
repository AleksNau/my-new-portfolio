import '@/styles/globals.css'
import {Montserrat} from 'next/font/google'
import Script from 'next/script';
import Head from "next/head";
import NavBar from "@/components/NavBar";
import YandexMetrika from "@/components/YandexMetrika";
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
      <>{}
          <Head>
              <title>AlexNow</title>
              <meta name="description" content="Мой сайт портфолио" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta name="yandex-verification" content="a420497eee0b3bf4" />
              <meta name="google-site-verification" content="hxo6qQ3moS2yHplomfTEmDOt_qr7ri_QTHHdk14mgBo" />
              <link rel="icon" href="/favicon.ico" />
              <link rel="canonical" href="https://alexnow.pro" />
              <meta name="keywords" content="Next.js,React,Portfolio,Frontend,Developer,AlexNow" />
              <meta name="referrer" content="origin-when-cross-origin" />
              <meta name="creator" content="Alex Now" />

          </Head>
          <NavBar/>
          <Script id='yandex-metrika' type="text/javascript" >
  { `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(98917796, "init", {
   defer: true,
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   })`}
</Script>
<noscript><div><img src="https://mc.yandex.ru/watch/98917796"alt="" /></div></noscript>
<YandexMetrika />
          <main className = {`${montserrat.variable} font-mont bg-light w-full min-h-screen dark:bg-dark`}>
              <AnimatePresence mode={'wait'}>
                  <Component key={router.asPath} {...pageProps} />
              </AnimatePresence>

          </main>
          <Footer/>
      </>

      )
}
