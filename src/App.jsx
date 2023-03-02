import {SideBar}  from "./components/sideBar"
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from './resources/theme'
import { Footer } from "./components/footer"
import { Home } from "./components/home"
import { ContextProvider } from "./provider/ContextProvider"

const App = () => {



  return (

    <ContextProvider>
      <ChakraProvider theme={theme}>
          <SideBar/>
          <Home/>
          <Footer/>
        </ChakraProvider>
    </ContextProvider>


  )
}

export default App
