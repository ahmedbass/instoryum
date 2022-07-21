import Link from "next/link";
import MyImg from "../ui/MyImg";

const NotificationItem = ({ notification }) => {
  if (!notification) return;

  return (
    <li className="flex justify-between items-center p-4 border-b space-x-1">
      <Link href={`${notification.username}`}>
        <a className="flex space-x-2 items-center">
          <MyImg size={1} rounded />
          <p>
            <span className="font-semibold block sm:inline-block pr-2">
              {notification.username}
            </span>
            <span className="flex-grow pr-1">{notification.message}</span>
            <span className="text-gray-400 ">{notification.date}</span>
          </p>
        </a>
      </Link>
      <button
        className="bg-blue-500 text-white font-semibold rounded
        px-1 py-0.5 sm:px-2 sm:py-1 text-sm sm:text-base "
      >
        Follow
      </button>
    </li>
  );
};
export default NotificationItem;
