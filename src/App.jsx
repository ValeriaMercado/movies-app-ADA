import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Footer } from "./components/footer";
import { Home } from "./components/home";
import {  Navbar } from "./components/navbar";
import { ContextProvider } from "./provider/ContextProvider";
import {BoxToPickContent} from "./components/boxToPickContent"




const App = () => {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Navbar/>
        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/upcoming" element={<BoxToPickContent searchCategory={`upcoming`} serieOrMovie={`movie`}/>}/>
          <Route path="/top_rated" element={<BoxToPickContent searchCategory={`top_rated`} serieOrMovie={`movie`}/>}/>
          <Route path="/popular" element={<BoxToPickContent searchCategory={`popular`} serieOrMovie={`tv`}/>}/>
          <Route path="/latest" element={<BoxToPickContent searchCategory={`latest`} serieOrMovie={`tv`}/>}/>



        </Routes>
        <Footer/>
      </ContextProvider>
    </BrowserRouter>


  );
};

export default App;