import { GoPrimitiveDot } from "react-icons/go";
import MyIcon from "./MyIcon";

const Dot = ({ isActive, style = 1 }) => {
  const activeStyle = +style === 1 ? "text-blue-500" : "text-blue-50";
  const inactiveStyle = +style === 1 ? "text-gray-300" : "text-gray-400";
  return (
    <MyIcon
      Icon={GoPrimitiveDot}
      size={0.5}
      hover={false}
      className={isActive ? activeStyle : inactiveStyle}
    />
  );
};

const DotCountIndicator = ({ count, currentActive, position, dotStyle = 1 }) =>
  count > 1 && (
    <div className={`flex justify-self-center z-10 ${position || "absolute-center-h bottom-5"}`}>
      {new Array(count).fill(null).map((point, i) => (
        <Dot key={i} isActive={i === currentActive} style={dotStyle} />
      ))}
    </div>
  );

export default DotCountIndicator;
