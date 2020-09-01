const Description = ({ item, t }) => (
  <div className='text-left text-white text-xl overflow-hidden'>
    <p>{`${t("model")} - ${t(item.model)}`}</p>
    <p>{`${t("dimension")} - ${t(item.dimension)}`}</p>
    <p>{`${t("weight")} - ${t(item.weight)}`}</p>
    <p>{`${t("capacity")} - ${t(item.capacity)}`}</p>
  </div>
);

export default Description;
