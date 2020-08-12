import { useTranslation } from "../../i18n";
import Heading from "shared/heading";

export default function Products() {
  const { t, i18n } = useTranslation();
  return (
    <section className='flex justify-center'>
      <div className='container'>
        <Heading t_key={"We make Armenia Powerfull"} />
        <div className='flex justify-around'>
          <div className='w-1/6 flex justify-center items-center opacity-25 hover:opacity-100 transition-opacity duration-500'>
            <img src='/assets/products/PW09.png' />
          </div>

          <div className='w-1/6 flex justify-center items-center opacity-25 hover:opacity-100 transition-opacity duration-500'>
            <img src='/assets/products/PW12.png' />
          </div>

          <div className='w-1/12 flex justify-center items-center opacity-25 hover:opacity-100 transition-opacity duration-500'>
            <img src='/assets/products/PW24.png' />
          </div>
        </div>
        <div className='mt-8'>
          <Heading t_key={"Currently at more than 50 points in Yerevan"} border={false} />
        </div>
      </div>
    </section>
  );
}
