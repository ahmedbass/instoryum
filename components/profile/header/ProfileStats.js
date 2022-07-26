import {formatNumber} from "../../../lib/utils";

const Stat = ({number, thing}) => (
    <button
        className="space-x-1 text-sm sm:text-base md:text-lg active:text-gray-400 flex flex-col md:flex-row items-center leading-5">
      <span className="font-semibold">{formatNumber(number)}</span>
      <span className="text-gray-500">{thing}</span>
    </button>
);

const ProfileStats = ({posts, followers, following, className}) => (
    <div
        className={`flex justify-around md:justify-start md:space-x-10 py-2 text-gray-700
        border-y md:border-none border-gray-300 ${className}`}
    >
      <Stat number={posts} thing={"posts"}/>
      <Stat number={followers} thing={"followers"}/>
      <Stat number={following} thing={"following"}/>
    </div>
);

export default ProfileStats;
