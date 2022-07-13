import { GoPrimitiveDot } from "react-icons/go";
import MyIcon from "./MyIcon";

const PicCountIndicator = ({isActive, style = 1}) => {
  const activeStyle = +style === 1 ? "text-blue-500" : "text-blue-50";
  const inactiveStyle = +style === 1 ? "text-gray-300" : "text-gray-400";
  const applyStyle = isActive ? activeStyle : inactiveStyle
  return (
    <MyIcon
      Icon={GoPrimitiveDot}
      size={12}
      className={`${applyStyle}`}
    />
  );
};
export default PicCountIndicator;
