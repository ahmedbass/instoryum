import Link from "next/link";
import Image from "next/image";

const ImageLogo = ({ logo }) => (
  <Image src={logo} alt="MyLogo" objectFit="contain" layout="fill" className="select-none" priority />
);

const MyLogo = ({ logo = 1, layout, noLink }) => {
  const logo1 = "/logo_light.png";
  const logo2 = "/logo.svg.webp";

  logo = logo === 1 ? logo1 : logo2;

  return (
    <div className={`relative ${layout}`}>
      {noLink ? (
        <ImageLogo logo={logo} />
      ) : (
        <Link href="/">
          <a className="relative w-40 h-full">
            <ImageLogo logo={logo} />
          </a>
        </Link>
      )}
    </div>
  );
};

export default MyLogo;
