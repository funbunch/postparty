import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import topPanelMob from '../public/img/bladetop-mob@2x@2x.jpg'
import topPanel from '../public/img/toppanel2.jpg'
import systemLogos from '../public/img/System-Logo@2x.png'
import phone from '../public/img/phone@2x.png'
import ctaVideo from '../public/img/cta-watch-video@2x.png'
import appleBadge from '../public/img/Apple-Store-Badge@2x.png'
import googleBadge from '../public/img/Google-Play-Badge@2x.png'

export const Toppanel = () => {
//   const Container = styled.div `
//   width: 1920px;
//   max-width: 100%;
//   margin: 0 auto;
//   /* transform: skewY(-2deg); */
// `
return (
  <div className='relative'> 
    <div className="md:hidden">
      <Image src={topPanelMob} width={768} height={1946} />
    </div> 
    <div className='hidden md:block'>
      <Image src={topPanel} width={1920} height={913} />
    </div>  
    <div className="content px-12">
      <div className="left-col absolute top-12 z-40 md:top-40 md:text-left md:left-[358px]">
        <div className="system-logos absolute top-10 md:top-6 z-40">
          <Image src={systemLogos} width={272} height={33} />
        </div>
        <h2 className="md:pb-10 md:text-[55px] leading-[1.2]">Relive Your Gaming<br />Greatness Again<br /> and Again
        </h2>
        <p className="text-base md:pb-10">Your greatest gaming moments shouldn't be fleeting. They<br />should be saved and savored like fine wine and fancy cheeses.<br />All you have to do is connect the Postparty mobile app to your<br />PS5 or XBOX to capture your most awesome moments, build a<br />vast collection of your greatest hits and share them via social<br />media with just a few clicks.
        </p>
        <div className="cta pb-12">
          <a href="">
          <Image src={ctaVideo} width={195} height={50} />
          </a>
        </div>
        <div className="apple pr-7 inline-block">
          <Image src={appleBadge} width={161} height={53} />
        </div>
        <div className="google inline-block">
          <Image src={googleBadge} width={182 } height={54} />
        </div>
      </div>
      <div className="phone absolute top-[35rem] left-[40px] md:top-[9rem] md:left-[62%]">
        <Image src={phone} width={335} height={590} layout='intrinsic' />
      </div>
    </div>
</div>

  
)

}