import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BiLastPage, BiFirstPage } from "react-icons/Bi";
import { Button, Flex, Spinner, Text } from "@chakra-ui/react";
import { MoviesCards } from "../moviesCard";
import { Home } from "../home";

const MoviesSearch = () => {
  const [isLoading, setLoading] = useState(false);
  const [movies, SetMovies] = useState([]);
  const [page, SetPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams({
    query: "",
  });

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=ae186e957330197b5106a6c66c8bd1df&query=${searchParams.get(
        "query"
      )}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        SetMovies(data.results);
        setLoading(false);
      }, 3000);
  }, [searchParams, page]);

  const handleClickNext = () => {
    SetPage(page + 1);
  };

  const handleClickPrev = () => {
    SetPage(page - 1);
  };

  return (
    <>
      <Flex flexWrap={"wrap"} justifyContent={"center"}>
        {isLoading && (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            mb={"500px"}
            mt={"300px"}
          />
        )}
        {movies?.map((m) => (
          <MoviesCards
            key={m.id}
            alt={m.title}
            movieTitle={m.title}
            TvTitle={m.name}
            movieDetails={m.overview}
            img={m.poster_path}
            id={m.id}
          />
        ))}
      </Flex>

      <Flex justifyContent={"center"}>
        <Button onClick={handleClickPrev} mr="50px" mb="20px" mt={"30px"}>
          <BiFirstPage />
          <Text ml={"10px"}>Prev</Text>
        </Button>
        <Button onClick={handleClickNext} mr="50px" mb="20px" mt={"30px"}>
          <Text mr={"10px"}>Next</Text>
          <BiLastPage />
        </Button>
      </Flex>
    </>
  );
};

export default MoviesSearch;
