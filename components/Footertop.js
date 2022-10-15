import Link from 'next/link'
import Image from 'next/image'
import footerTopMob from '../public/img/bladetopfooter-mob@2x.jpg'
import footerTop from '../public/img/blade6.jpg'
import footerLogo from '../public/img/logo@2x.png'
import appleBadgeMob from '../public/img/AppleStoreBadge-mob@2x.png'
import googleBadgeMob from '../public/img/GooglePlayBadge-mob@2x.png'
import appleBadge from '../public/img/Apple-Store-Badge@2x.png'
import googleBadge from '../public/img/Google-Play-Badge@2x.png'



export const Footertop = () => {

  return (
    <>
      <div className='grid'>
        <div className="self-start grid row-start-1 col-start-1 -mt-8">
          <Image src={footerTopMob} width={414} height={308} />
        </div>
        <div className="content flex flex-col row-start-1 col-start-1 items-center justify-evenly">
            <div className="logo">
              <Image src={footerLogo} width={93} height={73} />
            </div>
            <h2 className="text-center text-xl z-30">Start Immortalizing<br />Yourself</h2>
            <div className="badgeMob lg:hidden">
            <div className="apple lg:hidden pr-5 inline-block">
              <Image src={appleBadgeMob} width={92} height={30} />
            </div>
            <div className="google inline-block">
              <Image src={googleBadgeMob} width={103} height={30} />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:grid">
        <div className="hidden md:self-start md:grid md:row-start-1 md:col-start-1 mt-[-6px]">
          <Image src={footerTop} width={1920} height={733}/>
        </div>
        <div className="content flex flex-col row-start-1 col-start-1 items-center justify-evenly">
          <div className="logo md:w-[150px] lg:w-[186px]">
            <Image src={footerLogo} width={186} height={146} />
          </div>
          <h2 className="text-center z-30 lg:text-[55px] lg:leading-[66px]">Start Immortalizing Yourself</h2>
          <div className="badge hidden md:block">
            <div className="apple pr-7 inline-block">
              <Image src={appleBadge} width={161} height={53} />
            </div>
            <div className="google inline-block">
              <Image src={googleBadge} width={182} height={54} />
            </div>
          </div>
      </div>
    </div>
    </>

  )

}