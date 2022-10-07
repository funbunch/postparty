import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import sharePanel from '../public/img/blade5.png'

export const Sharepanel = () => {
  const Container = styled.div `
  width: 1920px;
  max-width: 100%;
  margin: 0 auto;
`

  const Imagewrap = styled.div `
  margin-top: -145px;
  z-index: 1200;
  `
  return (
    <Container>
      <Imagewrap>
        <Image src={sharePanel} width={1920} height={957} />
      </Imagewrap>
    </Container>

  ) 

}