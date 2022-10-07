import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import savePanel from '../public/img/blade4.png'

export const Savepanel = () => {
  const Container = styled.div `
  width: 1920px;
  max-width: 100%;
  margin: 0 auto;
`
const Imagewrap = styled.div `
margin-top: -85px;
z-index: 1500;
`

return (
<Container>
  <Imagewrap>
    <Image src={savePanel} width={1920} height={957} />
  </Imagewrap> 
</Container>

  
)

}