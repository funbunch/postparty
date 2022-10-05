import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import savePanel from '../public/img/save-panel.png'

export const Savepanel = () => {
  const Container = styled.div `
  width: 1920px;
  max-width: 100%;
  margin: 0 auto;
`
return (
<Container>
  <Image src={savePanel} width={1920} /> 
</Container>

  
)

}