import { MY_SCROLL } from "../../ui/Layout";
import MyButton from "../../ui/MyButton";
import { scaleNumbers } from "../../../utils";
import { useRecoilState } from "recoil";
import { selectedImageIndex, selectedImages } from "../../../atom/CreateNewPostAtom";

export const defaultFilters = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    default: 100,
    min: 50,
    max: 150,
    unit: "%",
  },
  {
    name: "Contrast",
    property: "contrast",
    value: 100,
    default: 100,
    min: 50,
    max: 150,
    unit: "%",
  },
  {
    name: "Saturation",
    property: "saturate",
    value: 100,
    default: 100,
    min: 50,
    max: 150,
    unit: "%",
  },
  {
    name: "Hue",
    property: "hue-rotate",
    value: 0,
    default: 0,
    min: -180,
    max: 180,
    unit: "deg",
  },
  {
    name: "Sepia",
    property: "sepia",
    value: 0,
    default: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
  {
    name: "Blur",
    property: "blur",
    value: 0,
    default: 0,
    min: 0,
    max: 10,
    unit: "px",
  },
];

const FilterItem = ({ filter, onChange, onReset }) => {
  return (
    <li className="group flex flex-col space-y-2 sm:text-lg">
      <div className="row-between">
        <p>{filter.name}</p>
        {+filter.value !== +filter.default && (
          <MyButton small className="md:hidden group-hover:block" onClick={onReset}>
            Reset
          </MyButton>
        )}
      </div>
      <div className="flex w-full space-x-2">
        <input
          type="range"
          min={filter.min}
          max={filter.max}
          onChange={onChange}
          value={filter.value}
          className="w-full appearance-none bg-gray-400 h-0.5 my-2 cursor-pointer"
        />
        <p className="text-sm text-gray-500 w-10 text-end">
          {scaleNumbers(filter.value, filter.min, filter.max, filter.min === 0 ? 0 : -100, 100)}
        </p>
      </div>
    </li>
  );
};

const ResetAllButton = ({ onClick }) => (
  <li className="self-end absolute -top-2 right-4 md:relative md:top-0 md:right-0">
    <MyButton outline small onClick={onClick}>
      Reset All
    </MyButton>
  </li>
);

const ImageFilters = () => {
  const [selectedFiles, setSelectedFiles] = useRecoilState(selectedImages);
  const [heroIndex, setHeroIndex] = useRecoilState(selectedImageIndex);
  const filters = selectedFiles[heroIndex]?.filters;

  const filterString = (filters) =>
    filters.map((filter) => `${filter.property}(${filter.value}${filter.unit})`).join(" ");

  const updateImageFilters = (filters) => {
    const newImages = [...selectedFiles];
    newImages[heroIndex] = {
      ...newImages[heroIndex],
      filters: filters,
      filterString: filterString(filters),
    };
    setSelectedFiles(newImages);
  };

  const handleFilterChange = (index, value) =>
    updateImageFilters(filters.map((filter, i) => (i === index ? { ...filter, value } : filter)));

  if (!filters) return;
  return (
    <section
      className={`pb-8 relative w-full md:w-[30vw] md:max-w-[25rem] h-1/2 md:h-full bg-white border-l border-gray-300 ${MY_SCROLL}`}
    >
      <h1 className="sm:text-xl font-semibold text-center p-4 border-b border-gray-300">Filters</h1>
      <ul className={`space-y-6 p-4 col-center items-stretch`}>
        {filters.map((filter, i) => (
          <FilterItem
            key={filter.property}
            filter={filter}
            onChange={(e) => handleFilterChange(i, e.target.value)}
            onReset={() => handleFilterChange(i, filter.default)}
          />
        ))}

        {filters !== defaultFilters && (
          <ResetAllButton onClick={updateImageFilters.bind(this, defaultFilters)} />
        )}
      </ul>
    </section>
  );
};
export default ImageFilters;
