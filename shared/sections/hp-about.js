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
          <a href='https://play.google.com/store/apps/details?id=com.powerfull.powerfull&fbclid=IwAR2YFUFQaW3SkISFjX4ZnOjA6sw9TtzBRMbSWlQnzIznXuBYCKsdO9x8VCY' className='lg:opacity-25 xs:opacity-100 hover:opacity-100 transition-opacity duration-500' target='_blank'>
            <img src='/assets/download/google_play.png' className='lg:max-h-10vh ' />
          </a>
          <a href='https://apps.apple.com/cn/app/powerfull-charge-your-phone/id1530779905?l=en&fbclid=IwAR0zDrSotVhqrn853FJvnvxeT9Bu1T3fRpijI_y1wwcvxR60m-UVWOOwu1Y' className='lg:opacity-25 xs:opacity-100 hover:opacity-100 transition-opacity duration-500 ml-16' target='_blank'>
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
