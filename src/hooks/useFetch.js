import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Context } from "../context/Context";

export const useFetch = (url, dependence) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const context = useContext(Context);
  const [searchParams, setSearchParams] = useSearchParams({
    query: "",
  });

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setIsLoading(false);
      });
  }, [dependence, page, context.language, searchParams]);

  return {
    movies: movies,
    isLoading: isLoading,
  };
};
