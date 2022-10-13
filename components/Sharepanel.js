import Link from 'next/link'
import Image from 'next/image'
import sharePanel from '../public/img/blade5.png'

export const Sharepanel = () => {

  return (
    <div>
      <div className='hidden md:block md:mt-[-64px] lg:mt-[-98px]'>
        <Image src={sharePanel} width={1920} height={957} />
      </div>
    </div>

  ) 

}