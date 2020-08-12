import { useTranslation } from "../../i18n";
import { plans } from "constants/plans";
import Heading from "shared/heading";

export default function Plans() {
  const { t, i18n } = useTranslation();
  return (
    <section>
      <div className='container'>
        <Heading t_key={"Powerfull Plans"} />
        <div className='flex'>
          {plans.map((item, key) => (
            <div className={`flex flex-col justify-center items-center  w-300px h-400px mx-2`} key={key}>
              <div className='flex flex-col justify-center items-center h-200px w-full bg-white'>
                <img src={item.src} alt={item.alt} className='h-110px' />
                <p children={item.description} className='text-primary-blue my-4 font-bold' />
              </div>
              <div className='flex justify-center items-center bg-primary-blue h-200px  font-bold text-sm w-full'>
                <h3 children={item.price} className='font-bold text-2xl  text-white' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
