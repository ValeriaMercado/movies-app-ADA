import { useContext} from "react";
import { Context } from "../../context/Context";
import { Box,  Flex } from "@chakra-ui/react";
import { CategoryFilms } from "../categoryFilm";
import { MoviesCarousel } from "../carousel";
import { SelectLanguage } from "../selectLanguage";

export const Home = () => {
  
  const context = useContext(Context);
  
  
  return (
    <Flex flexDirection={"column"}>
      <Box as="div">
        <MoviesCarousel searchCategory={`popular`}/>
      </Box>
      <Box
        as="section"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg={context.clearTheme ? "brand.secondary" : "brand.accent"}
        width="100%"
        height="100vh"
      >
        <Box display="flex" flexDirection="column">
          <SelectLanguage/>
          <Box display="flex" flexDirection="row">
            <CategoryFilms categoryTitle="Popular Movies" searchCategory="popular" />
            <CategoryFilms categoryTitle="Top Rated" searchCategory="top_rated" />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};