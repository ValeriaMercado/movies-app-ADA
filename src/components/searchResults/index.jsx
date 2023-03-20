import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Flex, Spinner } from "@chakra-ui/react";
import { MoviesCards } from "../moviesCard";
import ReactPaginate from "react-paginate";

const MoviesSearch = () => {
  const [isLoading, setLoading] = useState(false);
  const [movies, SetMovies] = useState([]);
  const [page, setPage] = useState(1);
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

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage.selected + 1);
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

      <Flex display={"flex"}>
        <ReactPaginate
          display="flex"
          breakClassName={"pagination__break"}
          previousLabel={"Prev"}
          nextLabel={"Next"}
          pageCount={100}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          breakLabel="..."
        />
      </Flex>
    </>
  );
};

export default MoviesSearch;
