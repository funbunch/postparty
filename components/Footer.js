import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

// const FooterSection = styled.div `
//   background-color: #502cbe;
//   text-align:center;
//   padding-top: 50px;
// `

// const Copy = styled.p `
//   font-weight: 700;
//   font-size: 22px;
//   line-height: 27px;
// `

export const Footer = () => {
  return (
    <div className="px-10 py-11 lg:px-96">
      <Link href="/Eula">
        <a className="uppercase block py-5">Eula</a>
      </Link>
      <Link href="/">
        <a className="uppercase pb-10 block border-b border-[#eaeaea]">Privacy Policy</a>
      </Link>
      <p className="pt-10 text-[9px] leading-4">&copy; 2022, Epic Games, Inc. All rights reserved. Epic Games, Postparty, Unreal Engine, & their logos are trademarks or registered trademarks of Epic Games, Inc. in the USA & elsewhere.  </p>
    </div>
  )
}
