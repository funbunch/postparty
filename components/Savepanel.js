import Link from 'next/link'
import Image from 'next/image'
import savePanel from '../public/img/blade4.png'
import saveImg from '../public/img/save-lockup@2x.png'

export const Savepanel = () => {

  return (
  <div>
    <div className="relative">
        <div className='hidden md:block md:relative md:mt-[-46px] lg:mt-[-55px] xl:mt-[-75px] sixteen:mt-[-87px]'>
          <Image src={savePanel} width={1920} height={957} alt="" />
        </div> 
        <div className="save-device hidden md:block md:absolute top-2 md:-top-[5%] md:left-[10%] md:w-[42%] lg:text-[55px] lg:w-[43%]">
            <Image src={saveImg} width={874} height={919} layout='intrinsic' alt="Device" />
        </div>
        <div className="right-col absolute md:left-[60%] md:top-32 lg:top-48">
          <h2 className='pb-12 md:pb-4 lg:text-[55px]'>Save</h2>
          <p className="subhead md:text-2xl md:pb-6 lg:pb-14">Your Vault Will Grow Quickly.</p>  
          <p className='pb-10 lg:pr-24'>Every video you save will be added to your personal collection.
          </p>
        </div>
      </div>
  </div>

  
)

}