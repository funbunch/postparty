import Meta from "../components/Meta"
import Link from "next/link"
import Image from 'next/image'
import logoBG from '../public/img/bg-faq@2x.jpg'

const faq = () => {
  return (
    <div>
        <Meta title='FAQ' />
        <div className="legal grid">
          <div className="grid self-start row-start-1 col-start-1 ">
          <Image src={logoBG} width={1920} height={640} alt=""/>
        </div>
        <div className="overlay flex flex-col
        row-start-1 col-start-1 items-center pt-7 md:px-5 md:pt-24 z-30">
          <h1 className="text-3xl text-center md:text-[55px] md:leading-[66px] font-bold pb-7 md:pb-24">FAQ</h1>
          <div className="background bg-white px-7 pt-7 text-[11px] md:text-base md:rounded-2xl md:py-14 md:px-24 md:grid md:grid-cols-12 gap-5 lg:w-[1200px]">
            <aside className="inside md:col-span-3">
              <p className="menu0header text-[#141414] text-2xl font-bold">Quick Access</p>
              <ul className="text-[#141414]">
                <li><Link href="#general"><a>General Questions</a></Link></li>
                <li><Link href="#fortnite"><a>Fortnite Specific Questions</a></Link></li>
                <li><Link href="#rocket-league"><a>Rocket League Specific Questions</a></Link></li>
              </ul> 
            </aside>
          <div className="inside md:col-span-9">
            <h2 className="text-[#141414] text-[55px]">General Questions</h2>
            <p className="space">Q:What is Postparty?<br />
              A: 	Postparty is everything you didn't know you needed. We are a game-clipping app that lets you record your best game play moments and share them tyour friends! It's easy to use and lets you share across platforms to make all your followers jealous. </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  
  )
}

export default faq