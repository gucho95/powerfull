import { useTranslation } from "../i18n";

export default function Heading({ t_key, border = true }) {
  const { t, i18n } = useTranslation();
  return (
    <div className='text-center pb-16'>
      <h2
        children={t(t_key)}
        className={`'font-bold text-3xl inline-block py-4 px-8 border-primary-light ${border ? "border-2" : ""}`}
      />
    </div>
  );
}
