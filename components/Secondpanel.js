import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import secondPanel from '../public/img/blade2.png'

export const Secondpanel = () => {
  const Container = styled.div `
  width: 1920px;
  max-width: 100%;
  margin: 0 auto;
`
  const Imagewrap = styled.div `
  margin-top: -70px;
  z-index: 1000;
  `

return (
<Container>
  <Imagewrap>
    <Image src={secondPanel} width={1920} height={957} /> 
  </Imagewrap>
</Container>

  
)

}