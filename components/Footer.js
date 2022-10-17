import Link from "next/link";
import Image from "next/image";
import scroll from '../public/img/scroll-Icon@2x.png'

export const Footer = () => {
  return (
    <div className="px-7 py-11 relative md:px-20 lg:px-60">
      <div className="scroll absolute right-8 md:right-20 lg:right-60">
      <Link href="#">
        <a href="#top">
          <Image src={scroll} width={28} height={28} alt="" />
        </a>
      </Link>
      </div>
      <Link href="#">
        <a className="uppercase block pb-5">Eula</a>
      </Link>
      <Link href="#">
        <a className="uppercase pb-10 block border-b border-[#eaeaea]">Privacy Policy</a>
      </Link>
      <p className="pt-10 text-[9px] leading-4">&copy; 2022, Epic Games, Inc. All rights reserved. Epic Games, Postparty, Unreal Engine, & their logos are trademarks or registered trademarks of Epic Games, Inc. in the USA & elsewhere.  </p>
    </div>
  )
}

export default Footer