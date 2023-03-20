import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Context } from "../context/Context";

export const useFetchSearch = ({ dependence }) => {
  const context = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams({
    query: "",
  });

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=ae186e957330197b5106a6c66c8bd1df&language=${
        context.language
      }&query=${searchParams.get("query")}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
        setLoading(false);
      }, 3000);
  }, [searchParams, page, context.language]);

  return {
    movies: movies,
    loading: loading,
    page: page,
    searchParams: searchParams,
  };
};
