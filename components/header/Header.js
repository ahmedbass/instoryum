import Logo from "./Logo";
import Searchbar from "./Searchbar";
import HeaderIcons from "./HeaderIcons";
import {useState} from "react";

const Header = (props) => {
  const [showSearchInSm, setShowSearchInSm] = useState(false);

  return (
      <header
          className="relative w-full sticky top-0 z-30 p-2 sm:px-6 bg-white border-b border-gray-300 ">
        {/*row-center-v justify-between lg:*/}
        <div
            className="max-w-6xl mx-auto row-center-v justify-between
             lg:grid sm:grid-cols-3 xs:space-x-2 sm:space-x-4"
        >
          <Logo layout={"relative flex justify-self-start h-12 sm:w-32 min-w-[6.5rem]"}/>
          <Searchbar showSearchInSm={showSearchInSm} setShowSearchInSm={setShowSearchInSm}/>
          {!showSearchInSm && <HeaderIcons/>}
        </div>
      </header>
  );
};
export default Header;
