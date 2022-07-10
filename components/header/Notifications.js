import OverlayCard from "../ui/OverlayCard";
import NotificationItem from "./NotificationItem";

const DUMMY = [
  {
    id: "1",
    username: "abc_someone",
    message: "Started following you.",
    date: "9h",
  },
  {
    id: "2",
    username: "someone_else",
    message:
      "mentioned you in a comment: @ahmed__3d I would like to say this is truly brilliant and I admire that point of view.",
    date: "9h",
  },
];

const Notifications = (props) => {
  return (
    <OverlayCard right className="w-screen md:w-[32rem] h-96">
      <ul>
        {DUMMY.map((item) => (
          <NotificationItem key={item.id} notification={item} />
        ))}
      </ul>
    </OverlayCard>
  );
};
export default Notifications;
