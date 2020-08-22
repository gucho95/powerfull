import { Fragment } from "react";
import Heading from "shared/heading";
import Footer from "shared/footer";
import { withTranslation } from "../../i18n";

const About = ({ t, i18n }) => {
  return (
    <Fragment>
      <section className='last-section'>
        <div className='container flex flex-col items-center'>
          <Heading text={t("hm_sec4_title")} />
          <div className='flex justify-around border-2 border-primary-light p-6'>
            <a href='#' className='lg:opacity-25 xs:opacity-100 hover:opacity-100 transition-opacity duration-500'>
              <img src='/assets/download/google_play.png' className='lg:w-32 xs:w-24' />
            </a>
            <a
              href='#'
              className='lg:opacity-25 xs:opacity-100 hover:opacity-100 transition-opacity duration-500 ml-16'
            >
              <img src='/assets/download/app_store.png' className='lg:w-32 xs:w-24' />
            </a>
          </div>
          <p className='font-bold text-primary-light text-justify mt-16 mb-16 px-4'>{t("hm_sec4_desc")}</p>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default withTranslation("sections")(About);
