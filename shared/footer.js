import Link from "next/link";
import { ImageLink } from "shared/link";
import { socialPages } from "constants/social";
import { useTranslation } from "../i18n";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className='flex justify-center'>
      <div className='container'>
        <div className='lg:flex lg:flex-row lg:justify-around xs:items-center  xs:flex-col'>
          <div className='flex items-center xs:justify-center'>
            <div>
              <img src='/assets/contact/phone.png' alt='' className='w-16 xs:w-12' />
            </div>
            <div className='flex flex-col ml-4 xs:w-40'>
              <a href='tel:+37498722218' children='+374 98 722218' />
              <a href='tel:+37498722218' children='+374 93 505229' className='my-1' />
            </div>
          </div>

          <div className='flex items-center xs:justify-center xs:my-6'>
            <div>
              <img src='/assets/contact/email.png' alt='' className='w-16 xs:w-12' />
            </div>
            <div className='flex flex-col ml-4 xs:w-40'>
              <a href='mailto:support@powerfull.am' children='support@powerfull.am' />
            </div>
          </div>

          <div className='flex items-center xs:justify-center'>
            {socialPages.map(({ href, src }) => (
              <ImageLink href={href} src={src} key={src} />
            ))}
          </div>
        </div>

        <div className='grid lg:grid-cols-3 xs:grid-cols-1 text-center items-center my-10'>
          <div></div>
          <div className='lg:order-1 xs:order-2 xs:mt-2'>
            {t("company")} {new Date().getFullYear()} &copy;{" "}
          </div>
          <div className='lg:order-2 xs:order-1'>
            <Link href='user_agreement_and_privacy_policy'>
              <a>{t("privacy_policy")}</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
