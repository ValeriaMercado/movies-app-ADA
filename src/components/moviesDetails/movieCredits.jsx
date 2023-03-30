import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Card, Box, Text, ListItem, List } from "@chakra-ui/react";
import { Context } from "../../context/Context";
import { useFetchDetails } from "../../hooks/useFetchDetails";
import noimage from "../../assets/noimage.png";

const MovieCredits = () => {
  const context = useContext(Context);
  const params = useParams();
  const api_key = import.meta.env.VITE_API_KEY;

  const { data } = useFetchDetails(
    `https://api.themoviedb.org/3/movie/${params.movieDetails}/credits?api_key=${api_key}&language=${context.language}`,
    context.language
  );

  const options = {
    type: "slide",
    perPage: 5,
    perMove: 5,

    breakpoints: {
      1024: {
        perPage: 4,
        perMove: 4,
      },
      600: {
        perPage: 2,
        perMove: 2,
      },
      480: {
        perPage: 2,
        perMove: 2,
      },
    },
  };

  return (
    <Box width="80%" margin="0 auto" marginTop="50px">
      <Text
        color={"white"}
        position="relative"
        fontWeight="extrabold"
        mb="20px"
      >
        {context.language === "en"
          ? "CAST"
          : context.language === "es"
          ? "ELENCO"
          : context.language === "fr"
          ? "DISTRIBUTION"
          : context.language === "it"
          ? "CAST"
          : context.language === "ru"
          ? "Актерский состав"
          : context.language === "ch"
          ? "投掷"
          : null}
      </Text>
      <Splide options={options}>
        {data?.cast?.map((c, index) => (
          <SplideSlide key={c.id}>
            <Card
              backgroundImage={
                c.profile_path
                  ? `http://image.tmdb.org/t/p/original/${c.profile_path}`
                  : `${noimage}`
              }
              backgroundPosition="center"
              backgroundSize="cover"
              height="250px"
              w={{ base: "90%", md: "70%" }}
              display="flex"
              mb={"10%"}
              h={{ base: "80%", md: "90%" }}
              id={index}
              textAlign="center"
            >
              <List>
                <ListItem
                  color="black"
                  fontWeight="bold"
                  fontSize={"13px"}
                  mt="230px"
                  bg={"white"}
                  pt="5%"
                >
                  {c.name}
                </ListItem>
                <ListItem
                  color="black"
                  fontSize={"11px"}
                  borderBottomRadius="10px"
                  h={"10%"}
                  bg={"white"}
                >
                  {c.character}
                </ListItem>
              </List>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </Box>
  );
};

export default MovieCredits;
