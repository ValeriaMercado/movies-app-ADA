import {SideBar}  from "./components/sideBar"
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from './resources/theme'
import { Footer } from "./components/footer"
import { Context } from "./context/Context"

const App = () => {

  const [clearTheme, setClearTheme] = useState(false)
  
  const context = {
    clearTheme: clearTheme,
    setClearTheme: setClearTheme
  }

  return (
    <Context.Provider>
        <ChakraProvider theme={theme}>
          <SideBar/>
          <Footer/>
        </ChakraProvider>
    </Context.Provider>
  )
}

export default App
