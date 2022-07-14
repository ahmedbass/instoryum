import { HiOutlineSearch } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";
import { XIcon } from "@heroicons/react/solid";
import MyIcon from "../ui/MyIcon";
import OverlayOpener from "../ui/OverlayOpener";
import SearchResults from "./SearchResults";

const SearchInput = ({ showInSm }) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    showInSm ? ref.current.focus() : ref.current.blur();
    setIsActive(showInSm);
  }, [showInSm]);

  const [inputValue, setInputValue] = useState("");
  const clearSearchInput = () => setInputValue("");
  const handleEscapeBlur = (e) => e.key === "Escape" && e.target.blur();

  const searchIcon = (
    <MyIcon Icon={HiOutlineSearch} size={2} hover={false} className="mr-3 text-gray-400" />
  );
  const clearBtn = (
    <button onClick={clearSearchInput}>
      <MyIcon Icon={XIcon} size={1} className="bg-gray-300 text-white rounded-full p-0.5" />
    </button>
  );

  return (
    <div
      className={`bg-gray-100 rounded-lg overflow-hidden px-4 justify-center items-center ${
        showInSm ? "flex" : "hidden sm:flex"
      }`}
    >
      {!isActive && searchIcon}

      <input
        ref={ref}
        type="text"
        placeholder="Search"
        className={`py-1.5 text-lg outline-none bg-transparent flex-grow w-10 ${
          !isActive && "text-gray-400"
        }`}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyUp={handleEscapeBlur}
        onFocus={setIsActive.bind(this, true)}
        onBlur={setIsActive.bind(this, false)}
      />

      {(isActive || inputValue.length > 0) && clearBtn}
    </div>
  );
};

const MinimizedSearchBtn = ({ showSearchbar }) => (
  <div className="sm:hidden flex justify-end">
    <button onClick={showSearchbar}>
      <MyIcon Icon={HiOutlineSearch} hover={false} />
    </button>
  </div>
);

const Searchbar = ({ showSearchInSm, setShowSearchInSm }) => {
  const handleHide = (e) => setShowSearchInSm(false);
  const showSearchbar = () => setShowSearchInSm(true);

  return (
    <>
      <OverlayOpener
        className={`group relative justify-self-center md:w-80 min-w-fit w-full`}
        onBlur={handleHide}
        toggle={false}
        opener={
          <>
            {!showSearchInSm && <MinimizedSearchBtn showSearchbar={showSearchbar} />}
            <SearchInput showInSm={showSearchInSm} />
          </>
        }
      >
        <SearchResults />
      </OverlayOpener>
    </>
  );
};
export default Searchbar;
