import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

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
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a><Image src="/img/logo-lockup@2x.png" alt="postparty Logo" width="214" height="41" /></a>
          </Link>
        </li>
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
      
    </nav>
  )
}

export default Nav