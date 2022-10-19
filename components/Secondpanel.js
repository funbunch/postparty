import Link from 'next/link'
import Image from 'next/image'
import secondPanelMob from '../public/img/blade2-mob@2x.png'
import secondPanel from '../public/img/blade2awlockup@2x.png'
import deviceLockup from '../public/img/device-lockup@2x.png'
import ctaMob from '../public/img/cta-works_mob@2x.png'
import cta from '../public/img/CTA-seehowitworks@2x.png'


export const Secondpanel = () => {
  return (
    <>
      <div className="-mt-60 z-40 md:hidden relative">
        <Image src={secondPanelMob} width={768} height={1371} alt="" />
        <div className="absolute top-20 px-7">
          <div className="device pb-9">
            <Image src={deviceLockup} width={350} height={238} layout='intrinsic' alt="" />
          </div>
            <h2 className='pb-5'>The Easiest Way to Clip, Save and Share</h2>
            <p className='text-mob pb-6'>Stop being so modest and show your friends and followers what true gaming greatness looks like.
            </p>
            <div className="cta text-center"><a href="">
              <Image src={ctaMob} width={171} height={31} alt="See how it works" /></a>
            </div>
        </div>
      </div>
      <div className="-mt-40 z-40 hidden md:block lg:-mt-56 xl:-mt-64 relative">
        <Image src={secondPanel} width={1920} height={957} alt="" /> 
        <div className="content-second-panel absolute top-2 md:top-[16%] md:left-[60%] md:w-[34%] lg:top-[20%] lg:left-[58%] lg:w-[36%]">
          <h2 className='pb-12 md:pb-4'>The Easiest Way to Clip, Save and Share</h2>
          <p className='pb-10 lg:pr-24'>Stop being so modest and show your friends and followers what true gaming greatness looks like.
          </p>
          <div className="cta hidden md:block"><a href="">
            <Image src={cta} width={238} height={49} alt="" /></a>
          </div> 
        </div>
      </div>
    </>
  )

}