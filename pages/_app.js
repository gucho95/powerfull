import App from "next/app";
import { appWithTranslation } from "../i18n";
import Head from "next/head";
import "../styles/index.css";
import "../styles/global.css";
import "../styles/animations/glow.css";
import "../styles/animations/focus.css";
import "../styles/animations/tracking.css";
import "../styles/animations/shadow-pop.css";
import "../styles/carousel.css";
import "swiper/swiper-bundle.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta property='og:url' content='http://www.powerfull.am' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Powerfull - We make Armenia Powerfull' />
        <meta
          property='og:description'
          content='Powerfull is a power bank sharing system which operates in Yerevan with around 50 stations located in different parts of the city. It works with its own App, available both in App Store and in Play market. The whole process of using the App as well as the terms and the conditions are showcased in the App.'
        />
        <meta property='og:image' content='/assets/logo_og.png' />
      </Head>
      <div className='flicker-4'>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
MyApp.getInitialProps = async (appContext) => ({ ...(await App.getInitialProps(appContext)) });

export default appWithTranslation(MyApp);
