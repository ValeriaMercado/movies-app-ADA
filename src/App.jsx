import {SideBar}  from "./components/sideBar"
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from './resources/theme'

const App = () => {

  return (
    <ChakraProvider theme={theme}>
      <SideBar/>
    </ChakraProvider>

  )
}

export default App
