
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from './resources/theme'
import { Footer } from "./components/footer"
import { Home } from "./components/home"
import { ContextProvider } from "./provider/ContextProvider"
import { BrowserRouter, Route, Routes } from "react-router-dom/dist"
import { TopRated } from "./topRated"
import { SideBar } from './components/sideBar'
import { Upcoming } from './components/upcoming'


const App = () => {



  return (
      
        <ContextProvider>
          <ChakraProvider theme={theme}>
            <BrowserRouter>
            <SideBar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/top_rated' element={<TopRated/>}/>
              <Route path='/upcoming' element={<Upcoming/>}/>

            </Routes>
            </BrowserRouter>
          </ChakraProvider>
        </ContextProvider>
      
  )
}

export default App
