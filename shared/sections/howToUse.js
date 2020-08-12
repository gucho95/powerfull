import { useTranslation } from "../../i18n";
import { points } from "constants/howToUse";
import Heading from "shared/heading";

export default function HowToUse() {
  const { t, i18n } = useTranslation();
  return (
    <section>
      <div className='container'>
        <Heading t_key={"How to use Powerfull"} />
        <div className='flex'>
          {points.map((item, key) => (
            <div
              className={`flex flex-col justify-center items-center opacity-25 hover:opacity-100 transition-opacity duration-500 bg-white w-300px h-400px mx-2`}
              key={key}
            >
              <div className='flex flex-col justify-center items-center h-200px'>
                <img src={item.src} alt={item.alt} className='h-110px' />
                <h3 children={item.title} className='font-bold text-2xl text-primary-dark' />
              </div>
              <div
                className='flex flex-col justify-center items-center bg-primary-blue h-200px px-2 font-bold text-sm'
                children={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
