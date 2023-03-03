
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from './resources/theme'
import { Footer } from "./components/footer"
import { Home } from "./components/home"
import { ContextProvider } from "./provider/ContextProvider"
import { BrowserRouter, Route, Routes } from "react-router-dom/dist"
import { TopRated } from "./topRated"
import { Upcoming } from "./upcoming"

const App = () => {



  return (
      <BrowserRouter>
        <ContextProvider>
          <ChakraProvider theme={theme}>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/topRated' element={<TopRated/>}/>
              <Route path='/upcoming' element={<Upcoming/>}/>
            </Routes>
          </ChakraProvider>
        </ContextProvider>
      </BrowserRouter>
  )
}

export default App
