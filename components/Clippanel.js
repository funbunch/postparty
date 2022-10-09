import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import clipPanelMob from '../public/img/blade3-mob@2x.png'
import clipPanel from '../public/img/blade3.png'

export const Clippanel = () => {
//   const Container = styled.div `
//   width: 1920px;
//   max-width: 100%;
//   margin: 0 auto;
//   /* background-color: #000;
//   transform: skewY(-2deg);
//   background-image: url('../img/panel-top-logo2.png');
//   background-size: 594px 386px;
//   background-repeat: no-repeat;
//   background-position: right; */
// `
//   const Imagewrap = styled.div `
//   margin-top: -115px;
//   z-index: 1500;
//   `

    return (
    <div>
      <div className="-mt-28 z-20 md:hidden">
        <Image src={clipPanelMob} width={768} height={1733} />
      </div>
      <div className="hidden md:block">
        <Image src={clipPanel} width={1920} height={957} />
      </div>
    </div>
  )

}