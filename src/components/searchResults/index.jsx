import { useContext, useEffect, useState } from "react";
import { Flex, Image, Spinner } from "@chakra-ui/react";
import { MoviesCards } from "../moviesCard";
import ReactPaginate from "react-paginate";
import { useFetchSearch } from "../../hooks/useFetchSearch";
import { useSearchParams } from "react-router-dom";
import { Context } from "../../context/Context";
import { Footer } from "../footer";
import noResults from "../../assets/noResults.png";

export const MoviesSearch = () => {
  const [isLoading, setLoading] = useState(false);
  const context = useContext(Context);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams({
    query: "",
  });
  const [movies, setMovies] = useState([]);

  // const { movies } = useFetchSearch(
  //   `https://api.themoviedb.org/3/search/multi?api_key=ae186e957330197b5106a6c66c8bd1df&language=${
  //     context.language
  //   }&query=${searchParams.get("query")}&page=${page}`
  // );

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

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage.selected + 1);
  };

  return (
    <>
      <Flex
        flexWrap={"wrap"}
        justifyContent={"center"}
        bg={context.clearTheme ? "brand.secondary" : "brand.accent"}
        pt="5%"
      >
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
        {movies.length === 0 && <Image src={noResults}></Image>}
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

        <Flex display={"flex"}>
          {movies.length === 0 ? (
            " "
          ) : (
            <ReactPaginate
              display="flex"
              breakClassName={"pagination__break"}
              previousLabel={"Prev"}
              nextLabel={"Next"}
              pageCount={20}
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
          )}
        </Flex>
        <Footer />
      </Flex>
    </>
  );
};

export default MoviesSearch;
