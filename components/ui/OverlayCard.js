const OverlayCard = ({ children, center, right, left, className }) => {
  const c = center ? "left-0 md:left-1/2 md:-translate-x-1/2" : "";
  const r = right ? "right-0 md:-right-4" : "";
  const l = left ? "left-0 md:-left-4" : "";
  const position = l || r || c;
  const scroll =
    "scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-200";

  return (
    <div
      className={`bg-white rounded-lg shadow-lg z-10 fixed md:absolute top-16 md:top-14
        ${position} ${scroll} ${className}`}
      tabIndex={0}
    >
      {children}
    </div>
  );
};
export default OverlayCard;
