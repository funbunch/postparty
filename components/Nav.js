import React, { useState } from "react";
import Link from 'next/link'
import Image from 'next/image'
import navStyles from '../styles/Nav.module.css'
import styled from 'styled-components'

// const btn = document.querySelector('menu-btn')
// const nav = document.querySelector('menu')

// btn.addEventListner('click' , () => {
//   btn.classList.toggle('open')
// })


const Navbar = styled.nav `
  width: 1900px;
  height: 70px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  padding: 15px 0 15px 30px;
  background-color: #202020;

  & ul {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }
  & li {
    list-style: none;
    padding-right: 35px;
    align-items: center;
    display: inline-block;

    &:last-child {
      margin-left: auto;
    }
  & img {
    padding-right: 120px;
    }
  }
  & a {
    text-transform: uppercase;
    font-size: 16px;
    line-height: 20px;
    display:inline-block;
  }

  & button {
    text-align: center;
    font-size: 16px;
    border: 0;
    align-self: flex-end;
  }
`

const Nav = () => {

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    console.log("CLIIIICKED")
  };

  // const [open, setOpen] = React.useState(false)

  // const menuToggle = () => {
  //   console.log("CLICKED")
  //   setOpen("open");
  //   }


  return (
    <nav className="{navStyles.nav} py-3.5 pl-5 w-54 relative">
      <Link href="/">
        <a><Image src="/img/logo-lockup@2x.png" alt="postparty Logo" width="214" height="41" /></a>
      </Link>
      <ul hidden>
        <li>
          <Link href="/news">
          <a className="text-3xl font-bold underline">News</a>
        </Link>
        </li>
    
        <li>
          <Link href='/faq'>FAQ</Link>
        </li>
        <li>
          <Link href='/download'>
            <a><button>Download</button></a>
          </Link>
        </li>
      </ul>
      {/* Hamburger Icon */}
      <button onClick={handleClick} className="menu-btn !w-54 block absolute top-0 right-0 bg-slate-700 md:hidden focus:outline-none">
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>

      {/* Mobile menu */}
      <div className="md:hidden z-3000">
          <div className="menu absolute flex flex-col items-left left-0 right-0 decoration-white uppercase text-sm pt-2 w-full tracking-wide">
            <a className="border-b border-white-500 py-3.5 pl-7" href="">Home</a>
            <a className="border-b border-white-500 py-3.5 pl-7" href="">FAQ</a>
            <div className="h-8"></div>
            <a className="dl-btn-mob py-3.5 text-center">Download</a>
          </div>          
      </div>

    </nav>
  )
}

export default Nav