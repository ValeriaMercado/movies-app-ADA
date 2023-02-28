import {SideBar}  from "./components/sideBar"
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {

  return (
    <ChakraProvider>
      <SideBar/>
    </ChakraProvider>

  )
}

export default App
