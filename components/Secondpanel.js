import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import secondPanelMob from '../public/img/blade2-mob@2x.png'
import secondPanel from '../public/img/blade2.png'

export const Secondpanel = () => {
//   const Container = styled.div `
//   width: 1920px;
//   max-width: 100%;
//   margin: 0 auto;
// `
//   // const Imagewrap = styled.div `
  // margin-top: -70px;
  // z-index: 1000;
  // `

  return (
  <div>
    <div className="-mt-40 z-40 md:hidden relative">
        <Image src={secondPanelMob} width={768} height={1371} />
      </div>
      <div className="-mt-16 z-40 hidden md:block relative">
        <Image src={secondPanel} width={1920} height={957} /> 
      </div>
  </div>

  
)

}