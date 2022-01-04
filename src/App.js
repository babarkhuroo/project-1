import { RootContainer } from './components/styles/RootContainer'
import { GlobalStyles } from './components/Globals/GlobalStyles'
import Header from './components/Header'
import Slider from './components/Slider'
import Main from './components/Main'
import Footer from './components/Footer'
import { ThemeProvider } from 'styled-components'
import { theme } from './components/Globals/Theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RootContainer>
        <GlobalStyles />
        <Header />
        <Slider />
        <Main />
        <Footer />
      </RootContainer>
    </ThemeProvider>
  )
}

export default App
