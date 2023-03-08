import { SideBar } from "./components/sideBar";
import { Footer } from "./components/footer";
import { Home } from "./components/home";
import { ContextProvider } from "./provider/ContextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/moviesDetails";

const App = () => {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:movieDetails" element={<MovieDetails />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
};

export default App;
