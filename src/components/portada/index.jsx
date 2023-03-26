import { useFetch } from "../../hooks/useFetch";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import { Card, Image, Text, Box, Button } from "@chakra-ui/react";
import { generalTranslations } from "../../translations/generalTranslations";
import { useTranslate } from "../../hooks/useTranslate";
import { Spinner } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Portada = () => {
  const context = useContext(Context);
  const translations = useTranslate(generalTranslations(context));

  const [randomMovie, setRandomMovie] = useState(null);

  const { movies, isLoading } = useFetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=ae186e957330197b5106a6c66c8bd1df&language=${context.language}-US&page=1`,
    context.language
  );
  useEffect(() => {
    if (movies) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      setRandomMovie(movies[randomIndex]);
    }
  }, [movies]);

  return (
    <>
      {isLoading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="white"
          size="xl"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        />
      ) : randomMovie ? (
        <Card>
          <Image
            src={`https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`}
            alt={randomMovie.title}
          />

          <Box
            position="absolute"
            bottom="3"
            left="50%"
            transform="translateX(-50%)"
          >
            <Link to={`/details/movie/${randomMovie.id}`}>
              <Button
                bg={context.clearTheme ? "brand.secondary" : "brand.accent"}
                color={context.clearTheme ? "black" : "white"}
                w={"200px"}
                mb="20%"
              >
                {context.language === "en"
                  ? "More"
                  : context.language === "es"
                  ? "Más"
                  : context.language === "fr"
                  ? "Plus"
                  : context.language === "it"
                  ? "Di più"
                  : context.language === "ru"
                  ? "Больше"
                  : null}
              </Button>
            </Link>
          </Box>
        </Card>
      ) : null}
    </>
  );
};
