import ReactTooltip from "react-tooltip";
import Description from "./description";
export default ({ item, t }) => (
  <ReactTooltip>
    <Description item={item} t={t} />
  </ReactTooltip>
);
