import { withTranslation } from "../../i18n";
import Heading from "shared/heading";
import Tooltip from "shared/tooltip";
import { products } from "constants/products";
import { useBreakpoints } from "hooks/useBreakpoints";
import Description from "shared/description";

const Products = ({ t }) => {
  const { desktopMode } = useBreakpoints();
  return (
    <section>
      <div className='container'>
        <Heading text={t("hm_sec1_title")} />
        <div className='lg:flex lg:justify-around sm:justify-center'>
          {products.map((item, key) => (
            <div
              data-tip='item-tooltip'
              className={`flex flex-col justify-center items-center lg:opacity-25 xs:opacity-100 hover:opacity-100 transition-opacity duration-500  xs:my-8 lg:my-0`}
              key={key}
            >
              <img src={item.src} alt={item.alt} className='xs:w-10/12 sm:w-9/12 xl:w-8/12' />
              {desktopMode ? (
                <Tooltip item={item} t={t} />
              ) : (
                <div className='pt-2 pb-12'>
                  <Description item={item} t={t} />
                </div>
              )}
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