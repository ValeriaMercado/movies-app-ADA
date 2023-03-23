import { useContext } from "react";
import { Context } from "../../context/Context";
import { Box, Flex } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Footer } from "../footer";
import { CategoryFilms } from "../categoryFilm";
import { MoviesCarousel } from "../carousel";
import {useTranslate} from "../../hooks/useTranslate"
import { generalTranslations } from "../../translations/generalTranslations";
import { Portada } from "../portada";


export const Home = () => {
  const context = useContext(Context);
  const translations =  useTranslate(generalTranslations(context))


  return (
    <Flex flexDirection={"column"} h="100vh">
      <Portada/>
      <Box as="div">
        <MoviesCarousel searchCategory={`popular`} serieOrMovie={`movie`} />
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
        <Box w={{ base: '100%', md: '90%', lg: '90%' }}  display="flex" flexDirection="column" justifyContent="center" alignItems="center" border="2px solid">


            <CategoryFilms
              categoryTitle={translations.popular}
              searchCategory="popular"
              serieOrMovie={`movie`}
            />
            <CategoryFilms
              categoryTitle={translations.topRated}
              searchCategory="top_rated"
              serieOrMovie={`movie`}
            />

        </Box>
      </Box>
      <Footer />
    </Flex>
  );
};
