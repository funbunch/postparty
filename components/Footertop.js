import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import footerTopMob from '../public/img/bladetopfooter-mob@2x.jpg'
import footerTop from '../public/img/blade6.jpg'
import footerLogo from '../public/img/logo@2x.png'
import appBadges from '../public/img/app-badges@2x.png'


export const Footertop = () => {
//   const Container = styled.div `
//   width: 1920px;
//   max-width: 100%;
//   margin: 0 auto;
//  ` 
  return (
    <>
      <div className='-mt-8 relative'>
        <Image src={footerTop} width={414} height={308} />
        <div className="content px-12">
            <div className="logo absolute top-10 left-[39%]">
              <Image src={footerLogo} width={93} height={73} />
            </div>
            <h2 className="absolute text-center text-xl top-[45%] left-[28%]">Start Immortalizing<br />Yourself</h2>
            <div className='absolute top-[70%] left-[26%]'>
              <Image src={appBadges} width={215} height={30} />
            </div>
        </div>
      </div>
      <div className="hidden md:block relative">
        <Image src={footerTop} width={1920} />
      </div>
    </>

  )

}