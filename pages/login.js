import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import About from "../components/About";
import InstaScreensSlideShow from "../components/InstaScreensSlideShow";
import LoginCard from "../components/login/LoginCard";
import MyButton from "../components/ui/MyButton";
import MyIcon from "../components/ui/MyIcon";

const GoHomeButton = () => (
  <Link href="/">
    <a className="mt-10 text-gray-500 hover:text-gray-700 w-full row-center">
      <MyIcon Icon={AiOutlineHome} size={2} className="text-gray-500 mx-1" hover={false} />
      Go back home
    </a>
  </Link>
);

const LoginPage = ({ providers }) => {
  return (
    <>
      <div className="w-full h-full row-center-h sm:pt-16">
        <InstaScreensSlideShow />

        <div className="w-100 h-fit sm:shrink-0 m-4">
          <LoginCard />
          <GoHomeButton />
        </div>
      </div>

      <div className="pb-10 text-center">
        <About />
      </div>
    </>
  );
};

export default LoginPage;
