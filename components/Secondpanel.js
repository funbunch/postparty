import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import secondPanelMob from '../public/img/blade2-mob@2x.png'
import secondPanel from '../public/img/blade2wlockup@2x.png'
import deviceLockup from '../public/img/device-lockup@2x.png'
import ctaMob from '../public/img/cta-works_mob@2x.png'
import cta from '../public/img/CTA-seehowitworks@2x.png'


export const Secondpanel = () => {
//   const Container = styled.div `
//   width: 1920px;
//   max-width: 100%;
//   margin: 0 auto;
// `
//   // const Imagewrap = styled.div `
  // margin-top: -70px;
  // z-index: 1000;
  // `

  return (
    <>
      <div className="-mt-40 z-40 md:hidden relative">
        <Image src={secondPanelMob} width={768} height={1371} />
        <div className="absolute top-16 px-11">
          <div className="device pb-12">
            <Image src={deviceLockup} width={860} height={612} layout='intrinsic' />
          </div>
          <h2 className='pb-5'>The Easiest Way to Clip, Save and Share</h2>
          <p className='text-mob pb-6'>Stop being so modest and show your friends and followers what true gaming greatness looks like.
          </p>
          <div className="cta text-center"><a href="">
            <Image src={ctaMob} width={171} height={31} /></a>
          </div>
        </div>
      </div>
      <div className="-mt-36 z-40 hidden md:block relative">
        <Image src={secondPanel} width={1920} height={957} /> 
        <div className="content-second-panel absolute top-2 md:top-[16%] md:left-[60%] md:w-[34%] lg:top-[25%] lg:left-[62%]">
          {/* <div className="device absolute top-10">
            <Image src={deviceLockup} width={860} height={612} layout='intrinsic' />
          </div> */}
          <h2 className='pb-12 md:pb-4'>The Easiest Way to Clip, Save and Share</h2>
          <p className='pb-10 lg:pr-24'>Stop being so modest and show your friends and followers what true gaming greatness looks like.
          </p>
          <div className="cta md:hidden"><a href="">
            <Image src={ctaMob} width={171} height={31} /></a>
          </div> 
          <div className="cta hidden md:block"><a href="">
            <Image src={cta} width={238} height={49} /></a>
          </div> 
          </div>
      </div>
    </>
  )

}