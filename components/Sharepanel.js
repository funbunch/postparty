import Link from 'next/link'
// import Image from 'next/image'
import sharePanel from '../public/img/blade5.png'
import shareImg from '../public/img/share@2x.png'
import social from '../public/img/social-icons@2x.png'

export const Sharepanel = () => {

  return (
    <div>
      <div className="relative">
        <div className="hidden md:block -mt-[75px] lg:-mt-[98px] thirteen:-mt-[110px] xl:-mt-[118px] sixteen:-mt-[133px] xxl:-mt-[149px]">
          <img src={sharePanel} width={1920} height={957} alt="" />
        </div>
        <div className="md:block content-clip absolute top-2 md:top-[29%] md:left-[11%] md:w-[40%] lg:top-48 lg:left-[10%] lg:w-[32%] xl:w-[26%] xl:top-64 xl:left-[16%] sixteen:top-72 xxl:w-[20%] xxl:top-96">
          <h2 className='pb-12 md:pb-4 lg:text-[55px] lg:pb-9'>Share</h2>
          <p className='subhead md:text-2xl md:pb-2 lg:pb-9'>Your Friends Gotta See This, Too. 
          </p>
          <p>Share any moment you please through your favorite social media platform (Facebook, Twitter, Instagram, etc.).
          </p>
          <div className="hidden md:block right-col absolute md:top-48 md:w-[39%] md:left-0 lg:top-60">
          <img src={social} width={183} height={39} layout='intrinsic' alt="Social"/>
        </div>  
        </div>
        <div className="hidden md:block left-col absolute md:top-[25%] md:w-[44%] md:right-0 lg:top-28">
          <img src={shareImg} width={912} height={667} layout='intrinsic' alt="Device" />
        </div>  
      </div>
    </div>

  ) 

}