const OnlineIndicator = ({ position = "-bottom-1 -right-1", size = "w-4 h-4", show }) => {
  if(!show) return;
  return (
    <span
      className={`bg-green-400 border-2 border-white rounded-full absolute ${size} ${position}`}
    />
  );
};
export default OnlineIndicator;
