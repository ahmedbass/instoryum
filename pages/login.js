import { getProviders, getSession, signIn } from "next-auth/react";
import Image from "next/image";
import Logo from "../components/header/Logo";
import MyButton from "../components/ui/MyButton";
import { ImFacebook2 } from "react-icons/im";
import MyIcon from "../components/ui/MyIcon";
import About from "../components/About";
import { useState } from "react";

const Input = ({ type = "text", placeholder, className }) => (
  <input
    type={type}
    className={`px-4 py-2 w-full rounded border bg-gray-100 outline-none ${className}`}
    placeholder={placeholder}
  />
);

const SlideImage = ({ src }) => (
  <Image src={src} alt="insta-screenshot" width={320} height={600} objectFit={"contain"} />
);

const Or = () => (
  <div className="row-center w-full">
    <span className="border-b border-gray-300 flex-grow"></span>
    <p className="text-sm text-gray-500 px-5 font-semibold">OR</p>
    <span className="border-b border-gray-300 flex-grow"></span>
  </div>
);

const BottomSection = ({ children }) => (
  <div className="p-4 row-center sm:bg-white sm:border border-gray-300 rounded mt-4 space-x-1">
    {children}
  </div>
);

const SignIn = () => (
  <>
    <Input type="text" placeholder="Phone number, username, or email" className="my-3" />
    <Input type="password" placeholder="Password" />

    <MyButton filled responsive className="my-6">
      Log In
    </MyButton>
  </>
);

const SignUp = () => (
  <>
    <div className="col-center space-y-3 w-full">
      <Input type="text" placeholder="Mobile number or email" />
      <Input type="text" placeholder="Full name" />
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
    </div>

    <MyButton filled responsive className="my-6">
      Sign Up
    </MyButton>
  </>
);

const LoginFB = ({ providerId }) => (
  <MyButton
    neutral
    bold
    className="my-6 flex space-x-2"
    onClick={() => signIn(providerId, { callbackUrl: "/" })}
  >
    <MyIcon Icon={ImFacebook2} hover={false} size={2} className="text-blue-700" />
    <p>Log in with Facebook</p>
  </MyButton>
);

const LoginPage = ({ providers }) => {
  const [inOrUp, setInOrUp] = useState(true);
  // console.log(providers);
  return (
    <>
      <div className="w-full h-full row-center-h sm:pt-16">
        <div
          className="relative hidden lg:block w-128
          bg-[url('/insta_screens/bg.png')] bg-no-repeat bg-top bg-contain"
        >
          <div className="absolute top-7 left-[29.2%]">
            <SlideImage src={"/insta_screens/s1.png"} />
            {/*<SlideImage src={"/insta_screens/s2.png"} />*/}
            {/*<SlideImage src={"/insta_screens/s3.png"} />*/}
            {/*<SlideImage src={"/insta_screens/s4.png"} />*/}
          </div>
        </div>

        <div className="w-100 h-fit sm:shrink-0">
          <div className="col-center-h px-2 xs:px-6 sm:px-10 py-6 sm:bg-white sm:border border-gray-300 rounded">
            <Logo layout="relative w-full h-20 m-6" noLink />

            {inOrUp ? <SignIn /> : <SignUp />}
            <Or />
            <LoginFB providerId={providers.facebook.id} />
            <MyButton small>Forgot password?</MyButton>
          </div>

          <BottomSection>
            <p className="text-gray-700">
              {inOrUp ? "Don't have an account?" : "Already have an account?"}
            </p>
            <MyButton onClick={() => setInOrUp(!inOrUp)}>Sign {inOrUp ? "up" : "in"}</MyButton>
          </BottomSection>
        </div>
      </div>

      <div className="pb-10 text-center">
        <About />
      </div>
    </>
  );
};
export default LoginPage;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: { destination: "/", permanent: false },
    };
  }

  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
