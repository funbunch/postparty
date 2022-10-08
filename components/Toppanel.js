import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import topPanelMob from '../public/img/bladetop-mob@2x@2x.jpg'
import topPanel from '../public/img/toppanel2.jpg'

export const Toppanel = () => {
//   const Container = styled.div `
//   width: 1920px;
//   max-width: 100%;
//   margin: 0 auto;
//   /* transform: skewY(-2deg); */
// `
return (
<div>
  <div className="md:hidden">
    <Image src={topPanelMob} width={768} height={1946} />
  </div>
  <div className="hidden md:block">
    <Image src={topPanel} width={1920} height={957} />
  </div>
</div>

  
)

}