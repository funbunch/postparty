import Link from 'next/link'
import Image from 'next/image'
import clipPanelMob from '../public/img/blade3-mob@2x.png'
import clipPanel from '../public/img/blade3.png'

export const Clippanel = () => {
    return (

      <div>
        <div className="-mt-28 z-20 md:hidden">
          <Image src={clipPanelMob} width={768} height={1733} />
        </div>
        <div className="-mt-[155px] hidden md:block">
          <Image src={clipPanel} width={1920} height={957} />
        </div>
      </div>
  )

}