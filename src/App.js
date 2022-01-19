import { RootContainer } from './components/styles/RootContainer'
import { GlobalStyles } from './components/Globals/GlobalStyles'
import Header from './components/Header'
import Slider from './components/Slider'
import Main from './components/Main'
import Footer from './components/Footer'
import { ThemeProvider } from 'styled-components'
import { theme } from './components/Globals/Theme'
import { useGlobalContext } from './components/context'
import LoginPage from './components/LoginPage'
import VideoGallery from './components/VideoGallery'

function App() {
  const { isLogin } = useGlobalContext()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <RootContainer>
        {isLogin && <LoginPage />}
        <Slider />
        <VideoGallery />
        <Main />
      </RootContainer>
      <Footer />
    </ThemeProvider>
  )
}

export default App
