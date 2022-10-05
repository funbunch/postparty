import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import topPanel from '../public/img/toppanel2.jpg'

export const Toppanel = () => {
  const Container = styled.div `
  width: 1920px;
  max-width: 100%;
  margin: 0 auto;
  transform: skewY(-2deg);
`
return (
<Container>
  <Image src={topPanel} width={1920} /> 
</Container>

  
)

}