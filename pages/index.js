import { Footer } from '../components/Footer'
import { Toppanel } from '../components/Toppanel'
import { Secondpanel } from '../components/Secondpanel'
import styles from '../styles/Home.module.css'
import { Clippanel } from '../components/Clippanel'
import { Savepanel } from '../components/Savepanel'
import { Sharepanel } from '../components/Sharepanel'
import { Footertop } from '../components/Footertop'


export default function Home() {
  return (
    <> 
      <Toppanel /> 
      <Secondpanel />
      <Clippanel />
      <Savepanel />
      <Sharepanel />
      <Footertop />
      <Footer />
      <footer className={styles.footer}>

      </footer>
    </> 
    
  )
}
