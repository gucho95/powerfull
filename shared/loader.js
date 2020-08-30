import { useEffect, useState } from "react";
import { withTranslation } from "../i18n";

const Loader = ({ t }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => setVisible(false), 1000);
  }, []);

  return visible ? (
    <div className='h-screen w-screen fixed z-200 overflow-hidden flex justify-center  items-center flex-col bg-primary-dark opacity-100 px-16'>
      <img src='/assets/battery.png' className='max-w-full' />
      <h2 className='md:text-2xl xs:text-lg mt-8 text-center' children={t("loader_text")} />
    </div>
  ) : null;
};

Loader.getInitialProps = async () => ({
  namespacesRequired: ["header", "footer", "sections"],
});

export default withTranslation("sections")(Loader);
