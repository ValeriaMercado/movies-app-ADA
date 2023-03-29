import { Context } from "../../context/Context";
import { MoviesCards } from "../moviesCard";
import { useState, useEffect } from "react";
import { Box, Spinner, Flex } from "@chakra-ui/react";
import { useFetch } from "../../hooks/useFetch";
import { useContext } from "react";
import ReactPaginate from "react-paginate";
import { Footer } from "../footer";

export const BoxToPickContent = ({ searchCategory, serieOrMovie }) => {
  const api_key= import.meta.env.VITE_API_KEY
  const context = useContext(Context);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const url = `https://api.themoviedb.org/3/${serieOrMovie}/${searchCategory}?api_key=${api_key}&language=${context.language}-US&page=${page}`;

  const { movies , isLoading: fetchIsLoading} = useFetch(url, [page, context.language, serieOrMovie, searchCategory]);

  useEffect(() => {
    setIsLoading(false);
  }, [fetchIsLoading]);


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
        color={context.clearTheme ? "black" : "white"}
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
            previousLabel={"Prev"}
            nextLabel={"Next"}
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
