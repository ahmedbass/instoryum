import {HiOutlineSearch} from "react-icons/hi";
import {useEffect, useRef, useState} from "react";
import {XIcon} from "@heroicons/react/solid";
import SearchResults from "./SearchResults";

const Searchbar = ({showInSm, hideSearchbar}) => {
  const searchInput = useRef();
  useEffect(() => {
    showInSm && searchInput.current.focus();
  }, [searchInput, showInSm]);

  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const blur = () => setIsFocused(false);

  const openSearch = (e) => setIsFocused(true);
  const clearSearchInput = () => setInputValue("");

  const hide = (e) => {
    if (e.relatedTarget) return;
    hideSearchbar();
    blur();
  };

  const handleEscapeBlur = () => {
    searchInput.current.blur();
    blur();
  };

  return (
      <div
          className="group md:relative justify-self-center w-full md:w-96 min-w-fit"
          onBlur={hide}
      >
        <div
            className={`bg-gray-100 rounded-lg overflow-hidden px-4 justify-center items-center ${
                showInSm ? "flex w-full" : "hidden sm:flex"
            }`}
        >
          {!isFocused && (
              <HiOutlineSearch className="h-6 mr-2 text-gray-400 min-w-fit"/>
          )}

          <input
              type="text"
              placeholder="Search"
              className={`py-2 text-lg outline-none bg-transparent flex-grow w-44 sm:w-auto ${
                  !isFocused && "text-gray-400"
              }`}
              ref={searchInput}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyUp={(e) => e.key === "Escape" && handleEscapeBlur()}
              onFocus={openSearch}
          />

          {(isFocused || inputValue.length > 0) && (
              <button onClick={clearSearchInput}>
                <XIcon
                    className={`h-5 bg-gray-300 text-white rounded-full p-0.5 min-w-max`}
                />
              </button>
          )}
        </div>

        {isFocused && <SearchResults/>}
      </div>
  );
};
export default Searchbar;
