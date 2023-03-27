import { useContext } from "react";
import { Context } from "../../context/Context";
import { Box, Flex } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Footer } from "../footer";
import { CategoryFilms } from "../categoryFilm";
import { MoviesCarousel } from "../carousel";
import { useTranslate } from "../../hooks/useTranslate";
import { generalTranslations } from "../../translations/generalTranslations";
import { Portada } from "../portada";
import { useMediaQuery } from "react-responsive";

export const Home = () => {
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const context = useContext(Context);
  const translations = useTranslate(generalTranslations(context));

  return (
    <Flex flexDirection={"column"}>
      {isSmallScreen ? (
        <Portada />
      ) : (
        <Box as="div">
          <MoviesCarousel searchCategory={`popular`} serieOrMovie={`movie`} />
        </Box>
      )}
      <Box
        as="section"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg={context.clearTheme ? "brand.secondary" : "brand.accent"}
        width="100%"
        height="100%"
      >
        <Box
          w="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <CategoryFilms
            categoryTitle={translations.popularMovies}
            searchCategory="popular"
            serieOrMovie={`movie`}
          />
          <CategoryFilms
            categoryTitle={translations.popularSeries}
            searchCategory="popular"
            serieOrMovie={`tv`}
          />
          <Footer />
        </Box>
      </Box>
    </Flex>
  );
};
