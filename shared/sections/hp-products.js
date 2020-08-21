import { withTranslation } from "../../i18n";
import Heading from "shared/heading";
import { products } from "constants/products";

const Products = ({ t, i18n }) => {
  return (
    <section>
      <div className='container'>
        <Heading text={t("hm_sec1_title")} />
        <div className='flex justify-around'>
          {products.map((item, key) => (
            <div
              className={`flex justify-center items-center opacity-25 hover:opacity-100 transition-opacity duration-500 ${item.classes}`}
              key={key}
            >
              <img src={item.src} alt={item.alt} className={item.imgClasses} />
            </div>
          ))}
        </div>
        <div className='mt-8'>
          <Heading text={t("hm_sec1_desc")} border={false} />
        </div>
      </div>
    </section>
  );
};

export default withTranslation("sections")(Products);
