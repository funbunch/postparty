import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import fullPanel from '../public/img/full-panel-logo.jpg'

export const Logopanels = () => {
  const Container = styled.div `
  width: 1920px;
  max-width: 100%;
  margin: 0 auto;
  position: relative;
`
  const Title = styled.h2`
  font-size: 55px;
  color: #fff;
  position: absolute;
  top: 250px;
  `;

// const Subhead = styled.h5`
// font-size: 24px;
// color: #fff;
// position: absolute;
// top: 250px;
// `;

// const Para = styled.p`
// font-size: 16px;
// color: #fff;
// position: absolute;
// `;

return (
<Container>
  <Image src={fullPanel} width={1920} /> 
  <Title>Clip</Title>
  {/* <Subhead>We Know Greatness When We See It, Too.</Subhead>
  <Para>So, when you do something amazing, we'll ooh and awe and suggest that you clip it for posterity. You can agree with just one click.</Para> */}
</Container>

  
)

}