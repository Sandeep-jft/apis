
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
import 'styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {ThemeProvider} from 'styled-components'

function MyApp({ Component, pageProps }) {

  const theme = {
    colors:{
      primary:'blue'
    }
  }

  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (<ThemeProvider theme={theme} >
    <>
    <Header />
    <Component {...pageProps} />
    <Footer />
    </>
   </ThemeProvider>)

}

export default MyApp
