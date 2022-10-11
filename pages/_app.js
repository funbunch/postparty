import Layout from '../components/Layout'
import '../styles/globals.scss'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #ffffff;
    font-family: interstate,sans-serif;
    font-weight: 500;
    font-style: normal; 
  }
  a {
    text-decoration: none;
  }

  button {
    background-color: #500096;
    width: 200px;
    height: 70px;
    color: #ffffff;
  }
`


// const theme = {
//   colors: {
//     primary: '#ffffff',
//   },
// }

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <GlobalStyle />
    {/* <ThemeProvider theme={theme}> */}
      <Component {...pageProps} />
    {/* </ThemeProvider> */}
    </Layout>
  )
}

export default MyApp
