const Description = ({ item, t }) => (
  <div className='grid grid-cols-1 w-full xs:text-center lg:text-left xs:pt-3 relative z-300  text-white'>
    <p className='lg:text-xl '>{`${t("model")} - ${t(item.model)}`}</p>
    <p className='lg:text-xl '>{`${t("dimension")} - ${t(item.dimension)}`}</p>
    <p className='lg:text-xl'>{`${t("weight")} - ${t(item.weight)}`}</p>
    <p className='lg:text-xl'>{`${t("capacity")} - ${t(item.capacity)}`}</p>
  </div>
);

export default Description;
