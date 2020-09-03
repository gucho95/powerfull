import Description from "./description";
const Tooltip = ({ item, t }) => {
  return (
    <div>
      <Description item={item} t={t} />
      <div className='absolute bottom-18px left-0 bg-white w-4/12 h-0.5px transform translate-x-20 translate-y-16 rotate-45 overflow-hidden' />
    </div>
  );
};

export default Tooltip;
