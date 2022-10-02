import Image from 'next/image'
import { Footer } from '../components/Footer'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

const Container = styled.div `
  width: 1900px;
  max-width: 100%;
  margin: 0 auto;
`

const Header = styled.h1 `
  color:#ffffff;
`
export default function Home() {
  return (
    <Container> 
      <Header>Testing</Header>    
      <div className={styles.diagonalBoxPink}>
          <div className={styles.content}>Test Skew</div>
      </div>
      <div className={styles.diagonalBoxBlack}>
          <div className={styles.content}>Test Skew</div>
      </div>
      <main className={styles.main}>
        <h1 className={styles.title}>
  
        </h1>
  

        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      
      
      <Footer />
      <footer className={styles.footer}>

      </footer>
    </Container> 
    
  )
}
