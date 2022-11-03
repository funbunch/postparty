import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from 'next/link'
// import Image from 'next/image'
import logo from '../public/img/logo-lockup@2x.png'


const Nav = () => {
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);
  // console.log(router.pathname)

  return (
    <nav className="w-full md:h-[70px] md:flex md:items-center ">
    <div className="justify-between md:w-full md:h-full md:items-center md:flex md:pl-8">
      <div className="flex items-center justify-between pl-3.5 md:block">
        <div className="flex items-center pt-2">
          <Link href="/" passHref>
            <a><img src={logo} alt="postparty Logo" width={171} height={33} /></a>
          </Link>
        </div>
        <div className="md:hidden">
          <button
            className="menu-btn p-2 text-white outline-none focus:outline-none"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-white m-auto"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-white m-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div
        className={`flex-1 justify-self-center md:block md:h-full ${
          navbar ? 'block' : 'hidden'
        }`} 
      >
        <ul className="menu md:bg-transparent items-center md:flex md:justify-center text-sm md:text-base pt-2 md:p-0 md:h-full tracking-wide">
          <li className="border-b border-btext-white text-white uppercase py-2.5 pl-7 md:hidden">
            <Link href="/" passHref>
              <a>Home</a>
            </Link>
          </li>
          <li className="border-b md:border-none text-white uppercase py-2.5 pl-7 md:pl-8">
            <Link href="/faq" passHref>
              <a className={router.pathname == "/faq" ? "active" : ""}>FAQ</a>
            </Link>
          </li>
          <li className="text-white uppercase h-8"></li>
          <li className="bg-[#278eff] md:bg-[#500096] md:ml-auto md:px-14 md:h-full hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 py-5 text-center text-white uppercase">
            <a>Download</a>
          </li>  
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Nav