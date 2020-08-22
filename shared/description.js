export default ({ item, t }) => (
  <div className='grid grid-cols-1 w-full xs:text-center lg:text-left'>
    <p className='lg:text-2xl xs:text-sm  text-primary-light'>{`${t("model")} - ${t(item.model)}`}</p>
    <p className='lg:text-2xl xs:text-sm text-primary-light'>{`${t("dimension")} - ${t(item.dimension)}`}</p>
    <p className='lg:text-2xl xs:text-sm text-primary-light'>{`${t("weight")} - ${t(item.weight)}`}</p>
    <p className='lg:text-2xl xs:text-sm text-primary-light'>{`${t("capacity")} - ${t(item.capacity)}`}</p>
  </div>
);
