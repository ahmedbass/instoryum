import {HiOutlineSearch} from "react-icons/hi";
import {useEffect, useRef, useState} from "react";
import {XIcon} from "@heroicons/react/solid";
import SearchResults from "./SearchResults";
import MyIcon from "../ui/MyIcon";
import OverlayOpener from "../ui/OverlayOpener";

const SearchInput = ({showInSm, onFocus, onEscape, isActive}) => {
  const searchInput = useRef();
  useEffect(() => {
    searchInput.current.focus();
  }, []);

  const [inputValue, setInputValue] = useState("");

  const clearSearchInput = () => setInputValue("");

  const searchIcon = (
      <MyIcon Icon={HiOutlineSearch} size={2} className="mr-3 text-gray-400"/>
  );

  const clearBtn = (
      <button onClick={clearSearchInput}>
        <MyIcon
            Icon={XIcon}
            size={1}
            className="bg-gray-300 text-white rounded-full p-0.5"
        />
      </button>
  );

  return (
      <div
          className={`bg-gray-100 rounded-lg overflow-hidden px-4 justify-center items-center ${
              showInSm ? "flex w-full" : "hidden sm:flex"
          }`}
      >
        {!isActive && searchIcon}
        <input
            type="text"
            placeholder="Search"
            className={`py-1.5 text-lg outline-none bg-transparent flex-grow w-10 ${
                !isActive && "text-gray-400"
            }`}
            ref={searchInput}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyUp={(e) => e.key === "Escape" && onEscape(searchInput.current)}
            onFocus={onFocus}
        />
        {(isActive || inputValue.length > 0) && clearBtn}
      </div>
  );
};

const Searchbar = ({showInSm, hide}) => {
  const [isActive, setIsActive] = useState(false);
  const openSearch = (e) => setIsActive(true);

  const handleHide = (e) => {
    hide();
    setIsActive(false);
  };
  const handleEscapeBlur = (input) => {
    input.blur();
    setIsActive(false);
  };

  return (
      <OverlayOpener
          className="group md:relative justify-self-center w-full md:w-80 min-w-fit"
          onBlur={handleHide}
          toggle={false}
          opener={
            <SearchInput
                isActive={isActive}
                showInSm={showInSm}
                onEscape={handleEscapeBlur}
                onFocus={openSearch}
            />
          }
      >
        <SearchResults/>
      </OverlayOpener>
  );
};
export default Searchbar;
