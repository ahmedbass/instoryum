const NavTab = ({ name, icon: Icon, onClick, isActive }) => (
  <button
    className={`group flex items-center space-x-1 text-gray-500 py-4 active:text-gray-400 select-none 
     md:border-t-2 ${
       isActive ? "text-blue-500 border-blue-500" : "border-transparent"
     }`}
    onClick={onClick}
  >
    <Icon className="w-7 h-7 md:w-5 md:h-5" />
    <span className="uppercase hidden md:inline-block text-sm">{name}</span>
  </button>
);

const PostsSectionsNav = ({ sections, activeTab, isMyself }) => {
  return (
    <div className="flex justify-around max-w-2xl mx-auto">
      {sections.map((section, i) => {
        if (section.private && !isMyself) return "";

        return (
          <NavTab
            key={section.name}
            {...section}
            isActive={i + 1 === activeTab}
          />
        );
      })}
    </div>
  );
};
export default PostsSectionsNav;
