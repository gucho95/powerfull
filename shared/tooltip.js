import ReactTooltip from "react-tooltip";
import Description from "./description";
const Tooltip = ({ item, t }) => (
  <ReactTooltip
    backgroundColor='black'
    place='top'
    effect='solid'
    overridePosition={({ left, top }, currentEvent, currentTarget, node, place, desiredPlace, effect, offset) => {
      const rect = currentTarget.getBoundingClientRect();
      return {
        left: rect.left - 0,
        top: rect.top - 200,
      };
    }}
  >
    <Description item={item} t={t} />
    <div className='absolute bottom-18px left-0 bg-white w-4/12 h-0.5px transform translate-x-20 translate-y-16 rotate-45' />
  </ReactTooltip>
);

export default Tooltip;
