// import Image from 'next/image'
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
return (
  <div> 
    <div className="content grid">
      <div className="grid self-start row-start-1 col-start-1 md:hidden">
        <img src={topPanelMob} width={768} height={1946} alt="" />
      </div> 
      <div className='hidden md:grid md:row-start-1 md:col-start-1'>
        <img src={topPanel} width={1920} height={1195} alt="" />
      </div>  
      <div className="overlay flex flex-col
      row-start-1 col-start-1 z-30 pt-3 px-8 md:pl-12 lg:pl-20 xl:pl-44">
          <div className="system-logos-mob pb-12 bg-[#500096] h-56 md:pb-2 md:hidden">
            <div className="ps5 inline-block pr-5">
            <a href="#"><img src={ps5Mob} width={67} height={15} alt="Ps5" /></a>
            </div>
            <div className="xbox inline-block">
            <a href="#"><img src={xboxMob} width={67} height={19} alt="xbox" /></a>
            </div>
          </div>
          <div className="system-logos hidden md:pt-3.5 md:pb-2 md:block lg:pb-16 xl:pb-20 sixteen:pb-36 xxl:pb-56">
            <div className="ps5 inline-block pr-11">
              <a href="#"><img src={ps5} width={118} height={27} alt="PS5" /></a>
            </div>
            <div className="xbox inline-block">
              <a href="#"><img src={xbox} width={107} height={33}  alt="Xbox"/></a>
            </div>
          </div>
          <div className="text -mt-[150px] md:mt-[0] md:w-[45%] lg:w-[42%] xl:w-[37%]">
            <a name="top"></a>
            <h2 className="pb-6 lg:text-[36px] lg:leading-[42px] thirteen:text-[55px] thirteen:leading-[60px]">Relive Your Gaming Greatness Again and Again
            </h2>
            <p className="text-mob md:text-sm md:pb-6 lg:text-base lg:pb-9">Your greatest gaming moments shouldn&apos;t be fleeting. They should be saved and savored like fine wine and fancy cheeses. All you have to do is connect the Postparty mobile app to your PS5 or XBOX to capture your most awesome moments, build a vast collection of your greatest hits and share them via social media with just a few clicks.
            </p>
          </div>
          <div className="cta-mob text-center pt-2 pb-7 md:hidden">
            <a href="#">
            <img src={ctaVideoMob} width={134} height={32} alt="Watch Video" />
            </a>
          </div>
          <div className="cta hidden md:block md:w-[170px] md:pb-4 lg:w-[190px] lg:pb-9">
            <a href="#">
            <img src={ctaVideo} alt="Watch Video "/>
            </a>
          </div>
          <div className="badgeMob text-center md:text-left lg:hidden">
            <div className="apple lg:hidden pr-5 inline-block">
            <a href="#"><img src={appleBadgeMob} width={92} height={30} alt="Apple"/></a>
            </div>
            <div className="google inline-block">
            <a href="#"><img src={googleBadgeMob} width={103} height={30} alt="Google" /></a>
            </div>
          </div>
          <div className="badge hidden text-center lg:block md:text-left">
            <div className="apple pr-7 inline-block">
            <a href="#"><img src={appleBadge} width={161} height={53} alt="Apple"/></a>
            </div>
            <div className="google inline-block">
            <a href="#"><img src={googleBadge} width={182} height={54} alt="Google"/></a>
            </div>
          </div>
          <div className="phone m-auto mt-[24px] md:hidden">
            <img src={phone} width={335} height={590} alt="device"/>
          </div>
      </div>
  
    </div>
</div>

  
)

}