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
        <link rel='apple-touch-icon' sizes='57x57' href='/assets/favicon/apple-icon-57x57.png' />
        <link rel='apple-touch-icon' sizes='60x60' href='/assets/favicon/apple-icon-60x60.png' />
        <link rel='apple-touch-icon' sizes='72x72' href='/assets/favicon/apple-icon-72x72.png' />
        <link rel='apple-touch-icon' sizes='76x76' href='/assets/favicon/apple-icon-76x76.png' />
        <link rel='apple-touch-icon' sizes='114x114' href='/assets/favicon/apple-icon-114x114.png' />
        <link rel='apple-touch-icon' sizes='120x120' href='/assets/favicon/apple-icon-120x120.png' />
        <link rel='apple-touch-icon' sizes='144x144' href='/assets/favicon/apple-icon-144x144.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='/assets/favicon/apple-icon-152x152.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/assets/favicon/apple-icon-180x180.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='/assets/favicon/android-icon-192x192.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/assets/favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='96x96' href='/assets/favicon/favicon-96x96.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/assets/favicon/favicon-16x16.png' />
        <meta name='msapplication-TileColor' content='#0F1B1F' />
        <meta name='msapplication-TileImage' content='/assets/favicon/ms-icon-144x144.png' />
        <meta name='theme-color' content='#0F1B1F' />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
MyApp.getInitialProps = async (appContext) => ({ ...(await App.getInitialProps(appContext)) });

export default appWithTranslation(MyApp);
