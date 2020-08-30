import Link from "next/link";
import LinkTo from "shared/link";
import { socialPages } from "constants/social";
import { withTranslation } from "../i18n";

const Footer = ({ t, i18n }) => {
  const { language } = i18n;
  return (
    <footer className='w-full flex justify-center border-t-2 border-primary-light py-4'>
      <div className='container'>
        <div className='lg:flex lg:flex-row lg:justify-around xs:items-center  xs:flex-col'>
          <div className='flex items-center xs:justify-center'>
            <div>
              <img src='/assets/contact/phone.png' alt='' className='w-16 xs:w-12' />
            </div>
            <div className='flex flex-col ml-4 xs:w-40'>
              <a href='tel:+37498722218' children='+374 98 722218' className='font-bold' />
              <a href='tel:+37498722218' children='+374 93 505229' className='my-1 font-bold' />
            </div>
          </div>

          <div className='flex items-center xs:justify-center xs:my-6'>
            <div>
              <img src='/assets/contact/email.png' alt='' className='w-16 xs:w-12' />
            </div>
            <div className='flex flex-col ml-4 xs:w-40'>
              <a href='mailto:support@powerfull.am' children='support@powerfull.am' className='font-bold' />
            </div>
          </div>

          <div className='flex items-center xs:justify-center'>
            {socialPages.map(({ href, src }) => (
              <LinkTo.External
                href={href}
                key={src}
                children={<img src={src} key={href} className='w-16 xs:w-12 mx-2' />}
              />
            ))}
          </div>
        </div>

        <div className='grid lg:grid-cols-3 xs:grid-cols-1 text-center items-center lg:my-10 xs:my-8'>
          <div></div>
          <div className='lg:order-1 xs:order-2 xs:mt-2'>
            {t("company")} {new Date().getFullYear()} &copy;{" "}
          </div>
          <div className='lg:order-2 xs:order-1'>
            <Link href={`/${language}/user_agreement_and_privacy_policy`}>
              <a>{t("privacy_policy")}</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default withTranslation("footer")(Footer);
