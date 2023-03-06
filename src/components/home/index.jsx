import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { CategoryFilms } from "../categoryFilm";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

export const Home = () => {
  const context = useContext(Context);
  const [movie, SetMovie] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=ae186e957330197b5106a6c66c8bd1df&page=1
    `)
      .then((res) => res.json())
      .then((data) => {
        SetMovie(data.results);
      });
  }, []);

  return (
    <Flex flexDirection={"column"}>
      <Box as="div">
        <Carousel autoPlay interval="10000" transitionTime="2000" infiniteLoop>
          {movie?.map((p) => (
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
                <Button bg={"purple.900"} color="white" w={"10%"} ml={"50%"}>
                  More
                </Button>
              </Flex>
            </div>
          ))}
        </Carousel>
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
        <CategoryFilms categoryTitle="Popular Movies" cat="popular" />
        <CategoryFilms categoryTitle="Top Rated" cat="top_rated" />
      </Box>
    </Flex>
  );
};
