import React, { useState } from "react";
import Link from 'next/link'
import Image from 'next/image'
import navStyles from '../styles/Nav.module.css'
import styled from 'styled-components'
import logo from '../public/img/logo-lockup@2x.png'

const Nav = () => {

  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full relative">
    <div className="justify-between md:items-center md:flex md:px-8">
      <div>
        <div className="flex items-center justify-between md:py-5 md:block">
          <a className="py-2.5 pl-5" href="#">
          <Image src={logo} alt="postparty Logo" width={214} height={41} />
          </a>
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
      </div>
      <div>
        <div
          className={`flex-1 justify-self-center md:block md:pb-0 md:mt-0 ${
            navbar ? 'block' : 'hidden'
          }`} 
        >
          <ul className="menu items-center md:flex md:justify-start md:space-x-6 md:space-y-0 text-sm pt-2 tracking-wide">
            <li className="border-b border-btext-white uppercase py-2.5 pl-7 md:hidden">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="border-b md:border-none text-white uppercase py-2.5 pl-7">
              <Link href="/faq">
                <a>FAQ</a>
              </Link>
            </li>
            <li className="text-white uppercase h-8"></li>
            <li className="bg-[#278eff] md:bg-[#500096] py-5 text-center text-white uppercase">
              <a>Download</a>
            </li>  
          </ul>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Nav