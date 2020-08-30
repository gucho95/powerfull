const Description = ({ item, t }) => (
  <div className='grid grid-cols-1 w-full xs:text-center lg:text-left xs:pt-3 relative z-300 '>
    <p className='lg:text-xl   text-primary-light'>{`${t("model")} - ${t(item.model)}`}</p>
    <p className='lg:text-xl  text-primary-light'>{`${t("dimension")} - ${t(item.dimension)}`}</p>
    <p className='lg:text-xl  text-primary-light'>{`${t("weight")} - ${t(item.weight)}`}</p>
    <p className='lg:text-xl  text-primary-light'>{`${t("capacity")} - ${t(item.capacity)}`}</p>
  </div>
);

export default Description;
