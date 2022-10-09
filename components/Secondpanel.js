import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import secondPanelMob from '../public/img/blade2-mob@2x.png'
import secondPanel from '../public/img/blade2.png'
import deviceLockup from '../public/img/device-lockup@2x.png'


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
    <div>
      <div className="-mt-40 z-40 md:hidden relative">
        <Image src={secondPanelMob} width={768} height={1371} />
        <div className="content px-12">
          <div className="device absolute top-10">
            <Image src={deviceLockup} width={860} height={612} />
            <h2>The Easiest Way to Clip, Save and Share</h2>
            <p className='text-mob'>Stop being so modest and show your friends and followers what true gaming greatness looks like.
            </p>
            <div className="cta"><a href="">See How It Works</a></div>
          </div>
        </div>
      </div>
      <div className="-mt-16 z-40 hidden md:block relative">
        <Image src={secondPanel} width={1920} height={957} /> 
      </div>
    </div>
  )

}