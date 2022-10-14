import Link from 'next/link'
import Image from 'next/image'
import clipPanelMob from '../public/img/blade3-mob@2x.png'
import clipPanel from '../public/img/blade3.png'
import clipImge from '../public/img/clip-img@2x.png'

export const Clippanel = () => {
    return (
      <>
        <div className="-mt-28 z-20 md:hidden">
          <Image src={clipPanelMob} width={768} height={1733} />
        </div>
        <div className="relative">
          <div className="-mt-[155px] hidden md:block">
            <Image src={clipPanel} width={1920} height={957} />
          </div>
          <div className="content-clip absolute top-2 md:top-[36%] md:left-[11%] md:w-[34%] lg:top-[35%] lg:left-[10%] lg:w-[32%]">
            <h2 className='pb-12 md:pb-4 lg:text-[55px] lg:pb-9'>Clip</h2>
            <p className='subhead md:text-2xl md:pb-2 lg:pb-9'>We Know Greatness<br />When We See It, Too. 
            </p>
            <p>So, when you do something amazing, we'll ooh and awe and suggest that you clip it for posterity. You can agree with just one click.
            </p>
          </div>
          <div className="hidden right-col md:block absolute md:top-[31%] md:w-[39%] md:left-[52%] md:top-[25%]">
            <Image src={clipImge} width={835} height={666} layout='intrinsic'/>
          </div>  
        </div>
      </>
  )

}