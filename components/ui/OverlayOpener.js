import { useState } from "react";

const OverlayOpener = ({
  children,
  opener,
  className,
  onClick,
  onBlur,
  toggle = true,
}) => {
  const [isActive, setIsActive] = useState(false);

  const activate = (e) => {
    console.log(e);
    if (toggle && isActive) {
      deactivate(e);
    } else {
      setIsActive(true);
      onClick && onClick();
    }
  };

  const deactivate = (e) => {
    e.stopPropagation();
    if (e.currentTarget.contains(e.relatedTarget)) return;
    setIsActive(false);
    onBlur && onBlur();
  };

  return (
    <div
      tabIndex={0}
      onClick={activate}
      onBlur={deactivate}
      className={className}
    >
      {opener}
      {isActive && children}
    </div>
  );
};
export default OverlayOpener;
