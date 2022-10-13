import Link from 'next/link'
import Image from 'next/image'
import savePanel from '../public/img/blade4.png'

export const Savepanel = () => {

  return (
  <div>
    <div className='hidden md:block md:mt-[-65px] lg:mt-[-85px]'>
      <Image src={savePanel} width={1920} height={957} />
    </div> 
  </div>

  
)

}