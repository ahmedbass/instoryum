import Logo from "./Logo";
import Searchbar from "./Searchbar";
import HeaderIcons from "./HeaderIcons";
import {useState} from "react";

const Header = (props) => {
  const [showSearchInSm, setShowSearchInSm] = useState(false);

  return (
      <header
          className="relative w-full sm:px-4 bg-white border-b border-gray-300 sticky top-0 z-30">
        <div
            className="px-2 sm:px-4 py-2 max-w-6xl mx-auto items-center justify-between flex lg:grid sm:grid-cols-3">
          <div className="relative flex justify-self-start mr-2 h-12 sm:w-32 min-w-[6.5rem]">
            <Logo/>
          </div>
          <Searchbar
              showInSm={showSearchInSm}
              hide={setShowSearchInSm.bind(this, false)}
          />
          {!showSearchInSm && (
              <HeaderIcons searchIconCallback={setShowSearchInSm.bind(this, true)}/>
          )}
        </div>
      </header>
  );
};
export default Header;
