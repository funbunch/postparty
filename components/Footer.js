import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const FooterSection = styled.div `
  background-color: #502cbe;
  text-align:center;
  padding-top: 50px;
`

const Copy = styled.p `
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
`

export const Footer = () => {
  return (
    <FooterSection>
      <Link href="/">
        <a><Image src="/img/logo@2x.png" alt="postparty Logo" width="93" height="73" /></a>
      </Link>
      <Copy>Start Immortalizing<br />Yourself</Copy>
    </FooterSection>
  )
}
