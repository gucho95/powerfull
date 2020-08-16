import { useState } from "react";
import Link from "next/link";
import LinkTo from "shared/link";
import { withTranslation } from "../i18n";
import { menuItems } from "constants/navbar";
import { locales } from "constants/locales";
import Icon from "shared/icons";

const Header = ({ t, i18n }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <header className='flex justify-center fixed z-40 w-full bg-primary-dark shadow-xl'>
      <div className='container'>
        <nav className='flex items-center justify-between flex-wrap p-6'>
          <div className='flex items-center flex-shrink-0 text-white mr-6'>
            <LinkTo.Internal href='/' children={<img src={"/assets/logo.png"} className='w-40 flicker-4' />} />
          </div>

          <div className='block lg:hidden border-red-500 border-2'>
            <button
              className='flex items-center px-3 py-2 rounded text-teal-200 hover:text-white hover:border-white'
              children={Icon.hamburger}
            />
          </div>

          <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:static lg:h-auto lg:bg-transparent  sm:fixed sm:h-screen sm:top-0 sm:left-0 bg-primary-dark text-primary-light sm:z-200 sm:pt-8 sm:px-8 lg:px-0 lg:pt-0'>
            <div className='flex justify-end lg:hidden'>
              <button className='p-2 rounded border-2 border-transparent hover:border-white' children={Icon.close} />
            </div>

            <div className='text-sm lg:flex-grow'>
              <ul className='flex lg:flex-row sm:flex-col sm:items-center'>
                {menuItems.map((item) => (
                  <li className='px-4 lg:mt-0 sm:mt-8' key={item.t_key}>
                    <Link href={item.href}>
                      <a children={t(item.t_key)} className='text-xl hover:text-white' />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ul className='flex sm:text-sm  lg:text-lg justify-center lg:mt-0  sm:mt-4'>
                {locales.map((item) => (
                  <li key={item.code}>
                    <button
                      className={`p-2 ${i18n.language === item.code ? "opacity-100" : "opacity-25"}`}
                      onClick={() => i18n.changeLanguage(item.code)}
                    >
                      {t(item.text)}{" "}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default withTranslation("header")(Header);
