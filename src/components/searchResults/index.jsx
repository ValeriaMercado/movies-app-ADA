import { useContext, useEffect, useState } from "react";
import { Flex, Image, Spinner } from "@chakra-ui/react";
import { MoviesCards } from "../moviesCard";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";
import { Context } from "../../context/Context";
import { Footer } from "../footer";
import noResults from "../../assets/noResults.png";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";


export const MoviesSearch = () => {
  const [isLoading, setLoading] = useState(false);
  const context = useContext(Context);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams({
    query: "",
  });
  const [movies, setMovies] = useState([]);
  const [searched, setSearched] = useState(false); 
  

  useEffect(() => {
    setLoading(true);
    setSearched(false);

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
        setSearched(true);
      }, 3000);
  }, [searchParams, page, context.language]);

  
  const handlePageChange = ({ selected }) => {
    setPage(selected + 1);
  };
  return (
    <>
      <Flex
        flexWrap={"wrap"}
        justifyContent={"center"}
        bg={context.clearTheme ? "brand.secondary" : "brand.accent"}
        pt="5%"
      >
        {searched && movies.length === 0 && (
          <Image src={noResults}></Image>
        )}
        {movies
          ?.filter((m) => m.poster_path)
          .map((m) => (
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

        <Flex display={"flex"} w={{ base: "100%" }} fontSize={{ base: "25px" }}>
          {movies.length === 0 ? (
            " "
          ) : (
            <ReactPaginate
              display="flex"
              breakClassName={"pagination__break"}
              previousLabel={<ChevronLeftIcon/>}
              nextLabel={<ChevronRightIcon/>}
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
      <Footer/>

      </Flex>

    </>
  );
};

export default MoviesSearch;

