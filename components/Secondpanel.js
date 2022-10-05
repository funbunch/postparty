import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import secondPanel from '../public/img/2panel.png'

export const Secondpanel = () => {
  const Container = styled.div `
  width: 1920px;
  max-width: 100%;
  margin: 0 auto;
`
return (
<Container>
  <Image src={secondPanel} width={1920} /> 
</Container>

  
)

}