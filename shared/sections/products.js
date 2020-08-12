import { useTranslation } from "../../i18n";
import Heading from "shared/heading";
import { products } from "constants/products";

export default function Products() {
  const { t, i18n } = useTranslation();
  return (
    <section>
      <div className='container'>
        <Heading t_key={"We make Armenia Powerfull"} />
        <div className='flex justify-around'>
          {products.map((item, key) => (
            <div
              className={`flex justify-center items-center opacity-25 hover:opacity-100 transition-opacity duration-500 ${item.classes}`}
              key={key}
            >
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>
        <div className='mt-8'>
          <Heading t_key={"Currently at more than 50 points in Yerevan"} border={false} />
        </div>
      </div>
    </section>
  );
}
