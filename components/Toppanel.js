import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import topPanelMob from '../public/img/bladetop-mob@2x@2x.jpg'
import topPanel from '../public/img/toppanel3.jpg'
import ps5 from '../public/img/ps5@2x.png'
import xbox from '../public/img/xbox@2x.png'
import phone from '../public/img/phone@2x.png'
import ps5Mob from '../public/img/ps5-mob@2x.png'
import xboxMob from '../public/img/xbox-mob@2x.png'
import ctaVideo from '../public/img/cta-watch-video@2x.png'
import ctaVideoMob from '../public/img/cta-video-mob@2x.png'
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
  <div> 
    <div className="content grid">
      <div className="md:hidden relative">
        <Image src={topPanelMob} width={768} height={1946} />
      </div> 
      <div className='hidden md:grid row-start-1 col-start-1'>
        <Image src={topPanel} width={1920} height={913} />
      </div>  
      <div className="overlay flex flex-col
      row-start-1 col-start-1 z-50 md:pl-12 lg:pl-64">
        {/* <div className="content-col z-40"> */}
          <div className="system-logos-mob pb-10 md:hidden">
            <div className="ps5 inline-block pr-5">
                <Image src={ps5Mob} width={44} height={15} />
            </div>
            <div className="xbox inline-block">
              <Image src={xboxMob} width={61} height={19} />
            </div>
          </div>
          <div className="system-logos hidden md:block md:pt-3.5 md:pb-2.5 xl:pb-20">
            <div className="ps5 inline-block pr-11">
              <a href=""><Image src={ps5} width={118} height={27} /></a>
            </div>
            <div className="xbox inline-block">
              <a href="http://"><Image src={xbox} width={107} height={33} /></a>
            </div>
          </div>
          <div className="text md:w-3/6 xl:w-4/12">
            <h2 className="pb-6 leading-[1.2]">Relive Your Gaming<br />Greatness Again<br />and Again
            </h2>
            <p className="md:pb-4">Your greatest gaming moments shouldn't be fleeting. They should be saved and savored like fine wine and fancy cheeses. All you have to do is connect the Postparty mobile app to your PS5 or XBOX to capture your most awesome moments, build a vast collection of your greatest hits and share them via social media with just a few clicks.
            </p>
          </div>
          <div className="cta-mob text-center md:hidden pt-7 pb-12">
            <a href="">
            <Image src={ctaVideoMob} width={134} height={32} />
            </a>
          </div>
          <div className="cta hidden md:block md:pb-4 xl:pb-7">
            <a href="">
            <Image src={ctaVideo} width={195} height={50} layout='intrinsic' />
            </a>
          </div>
          <div className="badge">
            <div className="apple pr-7 inline-block">
              <Image src={appleBadge} width={161} height={53} />
            </div>
            <div className="google inline-block">
              <Image src={googleBadge} width={182} height={54} />
            </div>
          </div>
      </div>
      {/* </div> */}
      <div className="phone md:hidden absolute top-[35rem] left-[40px]">
        <Image src={phone} width={335} height={590} layout='intrinsic' />
      </div>
    </div>
</div>

  
)

}