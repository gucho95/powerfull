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
            <a href='#' className='opacity-25 hover:opacity-100 transition-opacity duration-500'>
              <img src='/assets/download/google_play.png' className='w-32' />
            </a>
            <a href='#' className='opacity-25 hover:opacity-100 transition-opacity duration-500 ml-16'>
              <img src='/assets/download/app_store.png' className='w-32' />
            </a>
          </div>
          <p className='font-bold text-primary-light text-center mt-32 mb-16 px-4'>{t("hm_sec4_desc")}</p>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default withTranslation("sections")(About);
