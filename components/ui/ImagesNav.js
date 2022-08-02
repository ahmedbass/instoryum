import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import FloatingIcon from "./FloatingIcon";

const ImagesNav = ({
  onPreviousClick,
  onNextClick,
  previousDisabled,
  nextDisabled,
  isActive,
  className,
  layout,
  size,
}) => (
  <div className={`w-full px-4 absolute-center row-between pointer-events-none ${layout}`}>
    <FloatingIcon
      icon={MdOutlineNavigateBefore}
      disabled={previousDisabled}
      onClick={onPreviousClick}
      className={className}
      isActive={isActive}
      size={size}
    />
    <FloatingIcon
      icon={MdOutlineNavigateNext}
      disabled={nextDisabled}
      onClick={onNextClick}
      className={className}
      isActive={isActive}
      size={size}
    />
  </div>
);
export default ImagesNav;
