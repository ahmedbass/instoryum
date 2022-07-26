import Link from "next/link";
import Image from "next/image";

const ImageLogo = ({ logo }) => (
  <Image src={logo} alt="Logo" objectFit="contain" layout="fill" className="select-none" priority />
);

const Logo = ({ logo = 1, layout, noLink }) => {
  const logo1 = "/Instagram_logo.svg.png";
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

export default Logo;
