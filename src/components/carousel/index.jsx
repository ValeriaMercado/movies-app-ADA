import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { CategoryFilms } from "../categoryFilm";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import React from "react";

export const MoviesCarousel = () => {
  const context = useContext(Context);

  const { movies } = useFetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=ae186e957330197b5106a6c66c8bd1df&language=${context.language}-US&page=1`,
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
                <Button bg={"brand.accent"} color="white" w={"10%"}>
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
            ) : (
              <Link to={`/details/movie/${p.id}`} ml={"50%"}>
                <Button bg={"brand.accent"} color="white" w={"10%"}>
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
            )}
          </Flex>
        </Box>
      ))}
    </Carousel>
  );
};
