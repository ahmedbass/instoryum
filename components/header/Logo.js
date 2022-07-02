import Image from "next/image";
import Link from "next/link";

const Logo = ({logo = 1}) => {
  const logo1 =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png";
  const logo2 =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png";

  logo = logo === 1 ? logo1 : logo2;

  return (
      <Link href="/">
        <a>
          <Image src={logo} alt="Logo" objectFit="contain" layout="fill"/>
        </a>
      </Link>
  );
};

export default Logo;
