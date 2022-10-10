import Image from 'next/image'
import { Footer } from '../components/Footer'
import { Toppanel } from '../components/Toppanel'
import { Secondpanel } from '../components/Secondpanel'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import { Clippanel } from '../components/Clippanel'
import { Savepanel } from '../components/Savepanel'
import { Logopanels } from '../components/Logopanels'
import { Sharepanel } from '../components/Sharepanel'
import { Footertop } from '../components/Footertop'
// import topPanel from '../public/img/toppanel1.jpg'
// import secondPanel from '../public/img/2panel.png'

// const Container = styled.div `
//   width: 1920px;
//   max-width: 100%;
//   margin: 0 auto;
// `

const Header = styled.h1 `
  color:#ffffff;
`
export default function Home() {
  return (
    <> 
      <Toppanel /> 
      <Secondpanel />
      <Clippanel />
      <Savepanel />
      <Sharepanel />
      <Footertop />
      {/* <Savepanel /> */}
      {/* <Image src={topPanel} width={1920} /> 
      <Image src={secondPanel} width={1920} /> 
      <Image src={secondPanel} width={1920} />  */}
      {/* <div className={styles.diagonalBoxPink}>
          <div className={styles.content}>Test Skew</div>
      </div>
      <div className={styles.diagonalBoxBlack}>
          <div className={styles.content}>Test Skew</div>
      </div> */}
      {/* <main className={styles.main}>
        <h1 className={styles.title}>
  
        </h1>
      </main> */}
      <Footer />
      <footer className={styles.footer}>

      </footer>
    </> 
    
  )
}
