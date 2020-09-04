import { useState } from "react";
import Link from "next/link";
import LinkTo from "shared/link";
import { withTranslation } from "../i18n";
import { menuItems } from "constants/navbar";
import { locales } from "constants/locales";
import Icon from "shared/icons";
import { useBreakpoints } from "hooks/useBreakpoints";

const Header = ({ t, i18n }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const { desktopMode } = useBreakpoints();
  const Menu = () => (
    <div className='text-sm  lg:px-0 xs:px-2 '>
      <ul className='flex lg:flex-row xs:flex-col xs:items-center justify-center'>
        {menuItems(i18n.language).map((item) => (
          <li className={`px-4 lg:mt-0 xs:mt-8 ${menuOpened ? `tracking-in-contract-bck` : ""} `} key={item.t_key}>
            <Link href={`/${i18n.language}${item.href}`}>
              <a children={t(item.t_key)} className='text-xl hover:text-white' />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <header className='flex justify-center fixed  w-full bg-primary-dark shadow-xl border-primary-gray-1 border-b-2 z-100 '>
      <div className='container'>
        <nav className=' items-center justify-between flex-wrap p-6 w-full lg:grid lg:grid-cols-3 xs:flex xs:justify-between'>
          <div className='flex items-center flex-shrink-0 text-white mr-6 '>
            <LinkTo.Internal
              href={`/${i18n.language}`}
              children={<img src={"/assets/logo.png"} className='lg:w-40  xs:w-32 ' />}
            />
          </div>
          {desktopMode ? <Menu /> : null}

          <div className='block lg:hidden'>
            <button
              className='flex items-center px-3 py-2 rounded text-teal-200 hover:text-white hover:border-white'
              children={Icon.hamburger}
              onClick={() => setMenuOpened(true)}
            />
          </div>

          <div
            className={`w-full block  flex-grow lg:flex lg:items-center lg:w-auto lg:static lg:h-auto lg:bg-transparent  xs:fixed xs:h-screen xs:top-0 xs:left-0 bg-primary-dark text-primary-light xs:z-200  lg:px-0 lg:pt-0 ${
              menuOpened ? "xs:w-full" : "xs:w-0"
            } xs:overflow-hidden duration-200`}
          >
            <div className='flex justify-end lg:hidden lg:px-0 lg:py-0  xs:px-8 xs:py-4'>
              <button
                className='border-2 border-transparent hover:border-white'
                children={Icon.close}
                onClick={() => setMenuOpened(false)}
              />
            </div>
            {!desktopMode ? <Menu /> : null}

            <div className='flex  lg:justify-end xs:justify-center  w-full'>
              <ul className=' flex xs:text-sm  lg:text-lg  lg:mt-0 xs:mt-4 py-2 px-2'>
                {locales.map((item) => (
                  <li key={item.code} className={menuOpened ? `tracking-in-contract-bck` : ""}>
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
