import { Fragment } from "react";
import Heading from "shared/heading";
import Footer from "shared/footer";
import { withTranslation } from "../../i18n";

const About = ({ t, i18n }) => {
  return (
    <div className='w-full h-full flex flex-col justify-between h-md:justify-center'>
      <div className='container flex flex-col justify-center items-center h-full '>
        <Heading text={t("hm_sec4_title")} />
        <div className='flex justify-around border-2 border-primary-light p-6'>
          <a href='#' className='lg:opacity-25 xs:opacity-100 hover:opacity-100 transition-opacity duration-500'>
            <img src='/assets/download/google_play.png' className='lg:max-h-10vh ' />
          </a>
          <a href='#' className='lg:opacity-25 xs:opacity-100 hover:opacity-100 transition-opacity duration-500 ml-16'>
            <img src='/assets/download/app_store.png' className='lg:max-h-10vh ' />
          </a>
        </div>
        <p className='font-bold text-primary-light text-center my-4 px-4'>{t("hm_sec4_desc")}</p>
      </div>
      <Footer />
    </div>
  );
};

export default withTranslation("sections")(About);
