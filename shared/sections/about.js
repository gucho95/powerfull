import { useTranslation } from "../../i18n";
import { plans } from "constants/plans";
import Heading from "shared/heading";
import Footer from "shared/footer";

export default function About() {
  const { t, i18n } = useTranslation();
  return (
    <section className='last-section'>
      <div className='container flex flex-col items-center'>
        <Heading t_key={"Available at Google Play and App Store"} />
        <div className='flex justify-around border-2 border-primary-light p-6'>
          <a href='#' className='opacity-25 hover:opacity-100 transition-opacity duration-500'>
            <img src='/assets/download/google_play.png' className='w-32' />
          </a>
          <a href='#' className='opacity-25 hover:opacity-100 transition-opacity duration-500 ml-16'>
            <img src='/assets/download/app_store.png' className='w-32' />
          </a>
        </div>
        <p className='font-bold text-primary-light text-center mt-32 mb-16 px-4'>
          Powerfull is a power bank sharing system which operates in Yerevan with around 50 stations located in
          different parts of the city. It works with its own App, available both in App Store and in Play market. The
          whole process of using the App as well as the terms and the conditions are showcased in the App.
        </p>
      </div>
      <Footer />
    </section>
  );
}
