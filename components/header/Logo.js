import Link from "next/link";
import Image from "next/image";

const Logo = ({ logo = 1, layout, noLink }) => {
  const logo1 =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png";
  const logo2 =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png";

  logo = logo === 1 ? logo1 : logo2;

  return (
    <div className={layout}>
      {noLink ? (
        <Image src={logo} alt="Logo" objectFit="contain" layout="fill" className="select-none" />
      ) : (
        <Link href="/">
          <a>
            <Image src={logo} alt="Logo" objectFit="contain" layout="fill" className="select-none"/>
          </a>
        </Link>
      )}
    </div>
  );
};

export default Logo;
