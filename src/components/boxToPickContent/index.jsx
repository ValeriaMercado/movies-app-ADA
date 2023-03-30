import { Context } from "../../context/Context";
import { MoviesCards } from "../moviesCard";
import { useState, useEffect } from "react";
import { Box, Spinner, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import ReactPaginate from "react-paginate";
import { Footer } from "../footer";

export const BoxToPickContent = ({ searchCategory, serieOrMovie }) => {
  const context = useContext(Context);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      const url = `https://api.themoviedb.org/3/${serieOrMovie}/${searchCategory}?api_key=ae186e957330197b5106a6c66c8bd1df&language=${context.language}-US&page=${page}`;
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
      setIsLoading(false);
    };
    fetchMovies();
  }, [page, searchCategory, serieOrMovie, context.language]);

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage.selected + 1);
  };

  return (
    <Box>
      {isLoading && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}
      <Flex
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        position="relative"
        bg={context.clearTheme ? "brand.secondary" : "brand.accent"}
      >
        {movies?.map((movie) => {
          return (
            <MoviesCards
              searchCategory={searchCategory}
              key={movie.id}
              alt={movie.title}
              movieTitle={movie.title}
              TvTitle={movie.name}
              movieDetails={movie.overview}
              img={movie.poster_path}
              id={movie.id}
            />
          );
        })}
        <Flex
          display={"flex"}
          color={context.clearTheme ? "black" : "white"}
          mt="100px"
          w={"70%"}
          pos="relative"
        >
          <ReactPaginate
            display="flex"
            breakClassName={"pagination__break"}
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={19}
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
        <Footer />
      </Flex>
    </Box>
  );
};
