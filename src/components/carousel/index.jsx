import { useContext } from "react";
import { Context } from "../../context/Context";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useTranslate } from "../../hooks/useTranslate";
import { generalTranslations } from "../../translations/generalTranslations";

import React from "react";

export const MoviesCarousel = () => {
  const context = useContext(Context);
  const translations = useTranslate(generalTranslations(context));
  const api_key = import.meta.env.VITE_API_KEY;

  const { movies } = useFetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}&language=${context.language}-US&page=1`,
    context.language
  );

  return (
    <Carousel
      autoPlay
      interval="10000"
      transitionTime="2000"
      infiniteLoop
      set
      showThumbs={false}
    >
      {movies?.map((p) => (
        <Box
          backgroundImage={`url(https://image.tmdb.org/t/p/original/${p.backdrop_path})`}
          height="400px"
          w={"100%"}
          backgroundSize="100%"
          padding={"10%"}
          key={p.id}
          className="background"
        >
          <Flex
            flexDirection={"column"}
            justifyContent="center"
            alignContent={"center"}
          >
            <Text
              fontSize={"45px"}
              fontWeight="extrabold"
              color="white"
              position="relative"
              key={p.id}
            >
              {p.original_title ? p.original_title : p.name}
            </Text>
            <Text
              color={"white"}
              maxW="95%"
              p="10px"
              textAlign={"center"}
              position="relative"
              margin={"auto"}
              overflow={"hidden"}
              textOverflow={"ellipsis"}
              whiteSpace={"nowrap"}
            >
              {p.overview}
            </Text>
            {p.original_title ? (
              <Link to={`/details/movie/${p.id}`} ml={"50%"}>
                <Button
                  bg={context.clearTheme ? "brand.secondary" : "brand.accent"}
                  color={context.clearTheme ? "black" : "white"}
                  shadow={"0px 0px 5px 2px black"}
                  _hover={{
                    bg: context.clearTheme ? "brand.secondary" : "brand.accent",
                  }}
                >
                  {translations.more}
                </Button>
              </Link>
            ) : (
              <Link to={`/details/tv/${p.id}`} ml={"50%"}>
                <Button
                  bg={context.clearTheme ? "brand.secondary" : "brand.accent"}
                  color={context.clearTheme ? "black" : "white"}
                >
                  {translations.more}
                </Button>
              </Link>
            )}
          </Flex>
        </Box>
      ))}
    </Carousel>
  );
};
