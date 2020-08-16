import App from "next/app";
import { appWithTranslation } from "../i18n";
import "../styles/index.css";
import "../styles/global.css";
import "../styles/animations/glow.css";
import "../styles/animations/focus.css";
import "../styles/animations/tracking.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
MyApp.getInitialProps = async (appContext) => ({ ...(await App.getInitialProps(appContext)) });

export default appWithTranslation(MyApp);
