import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import footerTop from '../public/img/blade6.jpg'


export const Footertop = () => {
  const Container = styled.div `
  width: 1920px;
  max-width: 100%;
  margin: 0 auto;
 ` 
  return (
    <Container>
      <Image src={footerTop} width={1920} />
    </Container>

  )

}