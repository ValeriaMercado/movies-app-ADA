import { Footer } from "./components/footer";
import { Home } from "./components/home";
import { Navbar } from "./components/navbar";
import { ContextProvider } from "./provider/ContextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/moviesDetails";
import TVDetails from "./components/tvDetails";
import { BoxToPickContent } from "./components/boxToPickContent";
import "./index.css"
import { CategoryFilms } from "./components/categoryFilm";
//import {CategoryFilms} from './components/categoryFilm'


const App = () => {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Navbar />
        {/* <BoxToPickContent
              categoryTitle={"Top Rated Movies"}
              searchCategory={`top_rated`}
              serieOrMovie={`movie`}
            /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/upcoming"
            element={
              <BoxToPickContent
                categoryTitle={``}
                searchCategory={`upcoming`}
                serieOrMovie={`movie`}
              />
            }
          />
          <Route
            path="/top_rated"
            element={
              <BoxToPickContent
                categoryTitle={``}
                searchCategory={`top_rated`}
                serieOrMovie={`movie`}
              />
            }
          />
          <Route
            path="/popular"
            element={
              <BoxToPickContent
                categoryTitle={``}
                searchCategory={`popular`}
                serieOrMovie={`tv`}
              />
            }
          />
          <Route
            path="/latest"
            element={
              <BoxToPickContent
                  categoryTitle={``}
                  searchCategory={`latest`}
                  serieOrMovie={`tv`} />
            }
          />
          <Route path="/" element={<Home />} />
          <Route
            path="/details/movie/:movieDetails"
            element={<MovieDetails />}
          />
          <Route path="/details/tv/:TVDetails" element={<TVDetails />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>


  );
};

export default App;
