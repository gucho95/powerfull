import { useRef } from "react";
import { withTranslation } from "../../i18n";
import Heading from "shared/heading";
import { products } from "constants/products";
import { useBreakpoints } from "hooks/useBreakpoints";
import Description from "shared/description";
import { Fragment } from "react/cjs/react.production.min";
import ReactTooltip from "react-tooltip";
import Tooltip from "shared/tooltip";

const Products = ({ t }) => {
  const { desktopMode } = useBreakpoints();
  const tooltipRef = useRef([]);
  return (
    <Fragment>
      <Heading text={t("hm_sec1_title")} />
      <div className='lg:flex lg:justify-around lg:visible  xs:hidden'>
        {products.map((item, key) => (
          <div
            className={`flex flex-col justify-center items-center lg:opacity-25 group hover:opacity-100  my-0 `}
            key={key}
            ref={(el) => (tooltipRef.current[key] = el)}
            data-tip={key}
          >
            <img
              src={item.src}
              alt={item.alt}
              className='xs:w-10/12 sm:w-9/12 xl:w-8/12 transform group-hover:scale-105 transition-all duration-500'
            />
            {desktopMode ? null : (
              <div className='pt-2 pb-12'>
                <Description item={item} t={t} />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className='relative'>
        <div className='lg:hidden xs:visible overflow-hidden'>
          <img src='/assets/mobile_background.png' className='h-96 w-auto' />
        </div>

        <div className='lg:static xs:absolute bottom-0 w-full  left-0 '>
          <Heading text={t("hm_sec1_desc")} border={false} />
        </div>
      </div>

      <ReactTooltip
        event='mouseenter'
        eventOff='mouseleave'
        globalEventOff='scroll'
        scrollHide={true}
        afterShow={() => {
          const header = document.getElementsByTagName("header")[0];
          if (header) {
            header.style.zIndex = 0;
          }
        }}
        afterHide={() => {
          const header = document.getElementsByTagName("header")[0];
          if (header) {
            header.style.zIndex = 100;
          }
        }}
        getContent={(i) => i !== null && <Tooltip item={products[i]} t={t} />}
        arrowColor='transparent'
        backgroundColor='black'
        border={false}
        effect='solid'
        delayShow={100}
        overridePosition={({ left, top }, currentEvent, currentTarget, node, place, desiredPlace, effect, offset) => {
          const rect = currentTarget.getBoundingClientRect();
          return {
            left: rect.left - 0,
            top: rect.top - 160,
          };
        }}
      />
    </Fragment>
  );
};

export default withTranslation("sections")(Products);
