import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import topPanelMob from '../public/img/bladetop-mob@2x@2x.jpg'
import topPanel from '../public/img/toppanel2.jpg'
import systemLogos from '../public/img/System-Logo@2x.png'
import appBadges from '../public/img/app-badges@2x.png'
import phone from '../public/img/Phone@2x.png'

export const Toppanel = () => {
//   const Container = styled.div `
//   width: 1920px;
//   max-width: 100%;
//   margin: 0 auto;
//   /* transform: skewY(-2deg); */
// `
return (
<div>
  <div className="md:hidden relative">
    <Image src={topPanelMob} width={768} height={1946} />
    <div className="content px-12">
      <div className="system-logos absolute top-10 z-40">
        <Image src={systemLogos} width={272} height={33} />
      </div>
      <div className="text absolute top-12 z-40">
        <h2>Relive Your Gaming Greatness Again and Again
        </h2>
        <p className='text-mob'>Your greatest gaming moments shouldn't be fleeting. They should be saved and savored like fine wine and fancy cheeses. All you have to do is connect the Postparty mobile app to your PS5 or XBOX to capture your most awesome moments, build a vast collection of your greatest hits and share them via social media with just a few clicks.
        </p>
        <div className="cta"><a href="">Watch Video</a></div>
        <div className="app-btns">
        <Image src={appBadges} width={215} height={30} />
        </div>
        <div className="phone">
          <Image src={phone} width={382} height={672} />
        </div>
      </div>
    </div>
  </div>  
  <div className="hidden md:block relative">
    <Image src={topPanel} width={1920} height={957} />
  </div>
</div>

  
)

}