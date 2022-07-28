import { useEffect, useState } from "react";

const getSize = (size) => {
  switch (size) {
    case 0.5:
      return "w-4 h-4";
    case 1:
      return "w-6 h-6";
    case 2:
      return "w-8 h-8";
    case 3:
      return "w-10 h-10";
    case 4:
      return "w-12 h-12";
    case 5:
      return "w-16 h-16";
  }
};

// const colors = ["#f472b6", "#f87171", "#fb7185", "#fca5a5", "#f97316"];
// const colors = ["#fb7185", "#f472b6", "#e879f9", "#c084fc", "#a78bfa"];
const colors1 = ["#bae6fd", "#7dd3fc", "#38bdf8", "#0ea5e9", "#0284c7"];
const colors2 = ["#fecaca", "#fca5a5", "#f87171", "#ef4444", "#dc2626"].reverse();
const colors = [...colors1, ...colors2];

const MyLoader = ({ show = true, size = 2, colorful = true }) => {
  const [colorIndex, setColorIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => setColorIndex((i) => (i >= colors.length - 1 ? 0 : i + 1)),
      500
    );
    return () => clearInterval(intervalId);
  }, []);

  const s = getSize(size);
  const c = colorful ? colors[colorIndex] : "#374151";

  if (!show) return;
  return (
    <div
      className={`rounded-full ${s} border-2 border-b-transparent animate-spin transition-colors duration-500`}
      style={{ borderColor: `#cbd5e1 ${c} ${c}` }}
    />
  );
};
export default MyLoader;
