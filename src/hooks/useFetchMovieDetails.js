import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/Context";

export const useFetchMovieDetails = (dependence) => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const context = useContext(Context);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${params.movieDetails}?api_key=ae186e957330197b5106a6c66c8bd1df&language=${context.language}-US/`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        setLoading(false);
      }, 3000);
  }, [params.movieDetails, dependence, context.language]);

  return {
    movie: movie,
    loading: loading,
  };
};
