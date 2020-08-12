import Link from "next/link";
import { ImageLink } from "shared/link";
import { useTranslation } from "../i18n";
import { menuItems } from "constants/navbar";
import { locales } from "constants/locales";

export default function Header() {
  const {
    t,
    i18n: { changeLanguage },
  } = useTranslation();
  return (
    <header className='flex justify-center fixed z-50 w-full bg-primary-dark'>
      <div className='container'>
        <nav className='flex items-center justify-between flex-wrap p-6'>
          <div className='flex items-center flex-shrink-0 text-white mr-6'>
            <Link href='/'>
              <a>
                <img src='/assets/logo.png' className='w-40' />
              </a>
            </Link>
          </div>
          <div className='block lg:hidden'>
            <button className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'>
              <svg className='fill-current h-3 w-3' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                <title>Menu</title>
                <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
              </svg>
            </button>
          </div>
          <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
            <div className='text-sm lg:flex-grow'>
              <ul className='flex lg:flex-row sm:flex-col'>
                {menuItems.map((item) => (
                  <li className='px-4' key={item.t_key}>
                    <Link href={item.href}>
                      <a children={t(item.t_key)} className='text-xl hover:text-white' />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className='flex'>
                {locales.map((item) => (
                  <li key={item.code}>
                    <button className='p-2' onClick={() => changeLanguage(item.code)}>
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
}
