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
      <div className='-mt-8 md:hidden relative'>
        <Image src={footerTopMob} width={414} height={308} />
        <div className="content absoulte px-12">
            <div className="logo top-10 left-[39%]">
              <Image src={footerLogo} width={93} height={73} />
            </div>
            <h2 className="text-center text-xl top-[45%] left-[28%]">Start Immortalizing<br />Yourself</h2>
            <div className="badgeMob absolute left-[24%] top-[75%] text-center md:text-left lg:hidden">
            <div className="apple lg:hidden pr-5 inline-block">
              <Image src={appleBadgeMob} width={92} height={30} />
            </div>
            <div className="google inline-block">
              <Image src={googleBadgeMob} width={103} height={30} />
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
      <div className="footer-top hidden md:block relative mt-[-6px]">
        <Image src={footerTop} width={1920} height={733}/>
      </div>
      <div className="content absolute px-12 top-10 left-[39%] md:left-[35%]">
        <div className="logo md:absolute">
          <Image src={footerLogo} width={186} height={146} />
        </div>
        <h2 className="text-center text-xl md:absolute md:text-[55px] md:leading-[66px] top-[45%] md:top-[255%] md::left-[-56%] lg:left-[28%]">Start Immortalizing Yourself</h2>
        <div className="badge hidden text-center md:block md:text-left left-[24%] top-[75%]">
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