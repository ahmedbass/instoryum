import FloatingIcon from "./FloatingIcon";
import {MdOutlineNavigateBefore, MdOutlineNavigateNext} from "react-icons/md";

const ImagesNav = ({onPreviousClick, onNextClick, previousDisabled, nextDisabled}) => (
    <div className="w-full px-4 absolute-center row-between pointer-events-none">
      <FloatingIcon
          icon={MdOutlineNavigateBefore}
          disabled={previousDisabled}
          onClick={onPreviousClick}
      />
      <FloatingIcon icon={MdOutlineNavigateNext} disabled={nextDisabled} onClick={onNextClick}/>
    </div>
);
export default ImagesNav;
