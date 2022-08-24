import MyLogo from "./MyLogo";

const MyLoaderFull = ({show = true}) => {
  if (!show) return;
  return (
      <div
          className="bg-white fixed top-0 left-0 w-screen h-screen col-center z-50 overflow-hidden">
        <MyLogo logo={2} noLink layout="w-20 h-20"/>
        {/*animate-pulse*/}
        <div className="absolute bottom-10 text-center">
          <h1
              className="font-semibold text-xl tracking-wider text-transparent bg-clip-text
            bg-gradient-to-br from-amber-500 via-red-600 to-purple-600"
          >
            Instoryum
          </h1>
          <p className="font-light text-gray-500 uppercase tracking-widest">By Ahmed Bass</p>
        </div>
      </div>
  );
};
export default MyLoaderFull;
