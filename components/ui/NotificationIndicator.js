const NotificationIndicator = ({ number }) => {
  if (!number) return;
  if (number > 99) number = "99+";
  return (
    <div
      className="w-5 h-5 bg-red-500 rounded-full absolute -top-2 -right-2
      flex justify-center items-center overflow-hidden pointer-events-none select-none"
    >
      <p className="text-xs text-white text-center">{number}</p>
    </div>
  );
};
export default NotificationIndicator;
