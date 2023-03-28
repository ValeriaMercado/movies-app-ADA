import { Footer } from "./components/footer";
import { Home } from "./components/home";
import { Navbar } from "./components/navBar/index";
import { ContextProvider } from "./provider/ContextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/moviesDetails";
import TVDetails from "./components/tvDetails";
import { BoxToPickContent } from "./components/boxToPickContent";
import "./index.css";
import { CategoryFilms } from "./components/categoryFilm";
import MoviesSearch from "./components/searchResults";
import { NotFound } from "./components/404";
import AlternativeMovieDetails from "./components/alternativeMovieDetails";

const App = () => {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<MoviesSearch />} />
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
            path="/topTV"
            element={
              <BoxToPickContent
                categoryTitle={``}
                searchCategory={`top_rated`}
                serieOrMovie={`tv`}
              />
            }
          />
          <Route
            path="/details/movie/:movieDetails"
            // element={<MovieDetails />}
            element={<AlternativeMovieDetails/>}
          />
          <Route path="/details/tv/:TVDetails" element={<TVDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
};

export default App;
