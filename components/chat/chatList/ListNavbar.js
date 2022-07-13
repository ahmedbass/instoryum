import { useState } from "react";
import Link from "next/link";

const Tab = ({ tab, isActive, activate }) => {
  return (
    <li>
      <Link href={`chat/${tab}`}>
        <a
          className={`uppercase font-semibold px-8 py-3 inline-block text-sm ${
            isActive
              ? "border-b border-gray-700 text-gray-700"
              : "text-gray-300"
          }`}
          onClick={activate}
        >
          {tab}
        </a>
      </Link>
    </li>
  );
};

const ListNavbar = () => {
  const tabs = ["primary", "requests"];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <ul className="flex border-b border-gray-300">
      {tabs.map((tab, i) => (
        <Tab
          key={tab}
          tab={tab}
          isActive={activeTab === i}
          activate={setActiveTab.bind(null, i)}
        />
      ))}
    </ul>
  );
};

export default ListNavbar;
