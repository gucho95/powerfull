import Head from "next/head";
import Header from "shared/header";
import Footer from "shared/footer";
import Heading from "shared/heading";
import { withTranslation } from "../../i18n";

const Contact = ({ t }) => {
  return (
    <div>
      <Head>
        <title>Powerfull | Contact</title>
      </Head>
      <Header />
      <div className='flex flex-col items-center'>
        <div className='h-110px' />
        <div className='container py-32'>
          <div className='relative w-760px h-384px m-auto'>
            <img src='/assets/contact_page/contact_background.png' className='absolute z-10 w-full h-full' />
            <div className='absolute z-20 w-full h-full'>
              <h2 className='ml-184px mt-200px text-center text-black text-3xl  w-full' children={t("contact_us")} />
            </div>
          </div>
          <div className='relative w-760px h-384px m-auto'>
            <img src='/assets/contact_page/contact_form_1.png' className='absolute z-10 w-full h-full' />
            <div className='absolute z-20 w-full h-full'>
              <h2 className='mx-auto mt-20px text-center text-black text-3xl  w-full' children={t("contact_us")} />
              <form className='mt-34px'>
                <div className='flex'>
                  <label className='w-210px'>FirstName</label>
                  <input className='w-326px h-36px' />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

Contact.getInitialProps = async () => ({
  namespacesRequired: ["contact"],
});

export default withTranslation("contact")(Contact);
