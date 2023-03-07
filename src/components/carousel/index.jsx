import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { CategoryFilms } from "../categoryFilm";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { SelectLanguage } from "../selectLanguage";
import { useFetch } from "../../hooks/useFetch";


import React from 'react'

export const MoviesCarousel = ({searchCategory}) => {

    const context = useContext(Context);



    const [movies] = useFetch(`https://api.themoviedb.org/3/movie/${searchCategory}?api_key=ae186e957330197b5106a6c66c8bd1df&language=${context.language}-US&page=1`,context.language)

  return (
    
    <Carousel autoPlay interval="10000" transitionTime="2000" infiniteLoop>
      {movies?.map((p) => (
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${p.backdrop_path})`,
            height: "400px",
            width: "100%",
            backgroundSize: "100%",
            padding: "200px",
            display: "flex",
            alignItems: "center",
          }}
          key={p.id}
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
              key={p.id}
            >
              {p.original_title}
            </Text>
            <Text w={"80%"} color={"white"} p="10px" ml={"150px"}>
              {p.overview}
            </Text>
            <Button bg={"purple.600"} color="white" w={"10%"} ml={"50%"}>
              <Button
                bg={"purple.600"}
                color="white"
                w={"10%"}
                ml={"50%"}
              ></Button>
              More
            </Button>
          </Flex>
        </div>
      ))}
    </Carousel>

  )
}
