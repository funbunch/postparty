import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import topPanelMob from '../public/img/bladetop-mob@2x@2x.jpg'
import topPanel from '../public/img/toppanel4.jpg'
import ps5 from '../public/img/ps5@2x.png'
import xbox from '../public/img/xbox@2x.png'
import phone from '../public/img/phone@2x.png'
import ps5Mob from '../public/img/ps5-mob@2x.png'
import xboxMob from '../public/img/xbox-mob@2x.png'
import ctaVideo from '../public/img/cta-watch-video@2x.png'
import ctaVideoMob from '../public/img/cta-video-mob@2x.png'
import appleBadge from '../public/img/Apple-Store-Badge@2x.png'
import googleBadge from '../public/img/Google-Play-Badge@2x.png'
import appleBadgeMob from '../public/img/AppleStoreBadge-mob@2x.png'
import googleBadgeMob from '../public/img/GooglePlayBadge-mob@2x.png'

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
      <div className="grid self-start row-start-1 col-start-1 md:hidden">
        <Image src={topPanelMob} width={768} height={1946} />
      </div> 
      <div className='hidden md:grid md:row-start-1 md:col-start-1'>
        <Image src={topPanel} width={1920} height={1195} />
      </div>  
      <div className="overlay flex flex-col
      row-start-1 col-start-1 z-30 pt-3 px-8 md:pl-12 lg:pl-20 xl:pl-44">
          <div className="system-logos-mob pb-2 md:hidden">
            <div className="ps5 inline-block pr-5">
                <Image src={ps5Mob} width={67} height={15} />
            </div>
            <div className="xbox inline-block">
              <Image src={xboxMob} width={67} height={19} />
            </div>
          </div>
          <div className="system-logos hidden md:pt-3.5 md:pb-2 md:block lg: lg:pb-16 xl:pb-20">
            <div className="ps5 inline-block pr-11">
              <a href=""><Image src={ps5} width={118} height={27} /></a>
            </div>
            <div className="xbox inline-block">
              <a href="#"><Image src={xbox} width={107} height={33} /></a>
            </div>
          </div>
          <div className="text md:w-[45%] lg:w-[47%] xl:w-[37%]">
            <h2 className="pb-6 lg:text-[55px] lg:leading-none">Relive Your Gaming Greatness Again and Again
            </h2>
            <p className="md:text-sm md:pb-6 lg:text-base lg:pb-9">Your greatest gaming moments shouldn't be fleeting. They should be saved and savored like fine wine and fancy cheeses. All you have to do is connect the Postparty mobile app to your PS5 or XBOX to capture your most awesome moments, build a vast collection of your greatest hits and share them via social media with just a few clicks.
            </p>
          </div>
          <div className="cta-mob text-center md:hidden pt-7 pb-7">
            <a href="http://google.com">
            <Image src={ctaVideoMob} width={134} height={32} />
            </a>
          </div>
          <div className="cta hidden md:block md:w-[170px] md:pb-4 lg:w-[190px] lg:pb-9">
            <a href="">
            <Image src={ctaVideo} layout='intrinsic' />
            </a>
          </div>
          <div className="badgeMob text-center md:text-left lg:hidden">
            <div className="apple lg:hidden pr-5 inline-block">
              <Image src={appleBadgeMob} width={92} height={30} />
            </div>
            <div className="google inline-block">
              <Image src={googleBadgeMob} width={103} height={30} />
            </div>
          </div>
          <div className="badge hidden text-center lg:block md:text-left">
            <div className="apple pr-7 inline-block">
              <Image src={appleBadge} width={161} height={53} />
            </div>
            <div className="google inline-block">
              <Image src={googleBadge} width={182} height={54} />
            </div>
          </div>
          <div className="phone m-auto mt-[10px] md:hidden">
            <Image src={phone} width={335} height={590} layout='intrinsic' />
          </div>
      </div>
  
    </div>
</div>

  
)

}