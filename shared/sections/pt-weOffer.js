import { withTranslation } from "../../i18n";
import Heading from "shared/heading";
import Description from "shared/description";
import { products_for_partners } from "constants/products";

const WeOffer = ({ t, i18n }) => {
  return (
    <section>
      <div className='container'>
        <Heading text={t("pt_sec2_title")} />
        <div className='lg:flex xs:justify-center xs:grid xs:gap-4 lg:gap-6 xs:row-gap-8 lg:grid-cols-0  md:grid-cols-2 xs:grid-cols-1 lg:mx-8 xs:mx-0'>
          {products_for_partners.map((item, key) => (
            <div
              className='flex lg:flex-col xs:flex-col-reverse justify-center items-center lg:opacity-25 xs:opacity-100 hover:opacity-100 transition-opacity duration-500 xs:pt-2 xs:pb-16 lg:pt-0 lg:pb-0'
              key={key}
            >
              <div className='grid grid-cols-1 w-full xs:text-center xs:pt-6 lg:pb-3 lg:pt-0 text-sm'>
                <p className=' text-primary-light'>{`${t("model")} - ${t(item.model)}`}</p>
                <p className=' text-primary-light'>{`${t("dimension")} - ${t(item.dimension)}`}</p>
                <p className=' text-primary-light'>{`${t("weight")} - ${t(item.weight)}`}</p>
                <p className=' text-primary-light'>{`${t("capacity")} - ${t(item.capacity)}`}</p>
              </div>
              <img src={item.src} alt={item.alt} className='xs:w-11/12 sm:w-9/12 xl:w-8/12' />
            </div>
          ))}
        </div>
        <div className='mt-8'>
          <Heading text={t("pt_sec2_desc")} border={false} />
        </div>
      </div>
    </section>
  );
};

export default withTranslation("sections")(WeOffer);
