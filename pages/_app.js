import App from "next/app";
import { appWithTranslation } from "../i18n";
import Head from "next/head";
import "../styles/index.css";
import "../styles/global.css";
import "../styles/animations/glow.css";
import "../styles/animations/focus.css";
import "../styles/animations/tracking.css";
import "../styles/carousel.css";
// import Swiper styles
import "swiper/swiper-bundle.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='flicker-4'>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
MyApp.getInitialProps = async (appContext) => ({ ...(await App.getInitialProps(appContext)) });

export default appWithTranslation(MyApp);
