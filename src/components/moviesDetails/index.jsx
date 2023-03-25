import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import MovieTrailer from "./indexTrailer";
import { BsPlayCircle } from "react-icons/bs";
import {
  Image,
  Box,
  Text,
  Button,
  Icon,
  Flex,
  UnorderedList,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import MovieCredits from "./movieCredits";
import { useFetchMovieDetails } from "../../hooks/useFetchMovieDetails";
import { Context } from "../../context/Context";
import { Footer } from "../footer";

const MovieDetails = ({ id }) => {
  const [trailer, setTrailer] = useState(true);
  const [loading, setLoading] = useState(false);
  const context = useContext(Context);

  const { movie } = useFetchMovieDetails(
    `https://api.themoviedb.org/3/movie/${id}?api_key=ae186e957330197b5106a6c66c8bd1df&language=${context.language}`,
    context.language
  );

  return (
    <>
      <Box
        w="100%"
        key={movie.id}
        backgroundImage={
          movie?.backdrop_path
            ? `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`
            : " "
        }
        height="100%"
        backgroundSize="cover"
        className="backdrop"
      >
        {loading && (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            mb={"500px"}
            mt={"300px"}
            ml="50%"
          />
        )}

        <Flex>
          <Image
            width="300px"
            ml={"200px"}
            mb="50px"
            pt="200px"
            src={
              movie.poster_path
                ? `http://image.tmdb.org/t/p/w500/${movie.poster_path} `
                : " "
            }
            alt={movie.original_title}
            key={movie.id}
          />
          <Flex direction={"column"}>
            <Button
              colorScheme="blackAlpha"
              size="md"
              w={"150px"}
              ml={"500px"}
              mb="10px"
              mt="200px"
              onClick={() => setTrailer(!trailer)}
            >
              {trailer ? <Icon as={BsPlayCircle} /> : " "}

              {trailer ? "   Trailer" : "Hide trailer"}
            </Button>
            {!trailer && (
              <Box as="div" ml={"100px"}>
                <MovieTrailer />
              </Box>
            )}

            {trailer ? (
              <Box as="div">
                <Flex flexDirection={"row"} ml="50px">
                  <Text
                    fontSize={"45px"}
                    position="relative"
                    color="white"
                    fontWeight="extrabold"
                    key={movie.id}
                    ml="10%"
                    w={"70%"}
                  >
                    {movie.title}
                  </Text>
                  <Text
                    fontSize={"24px"}
                    fontWeight="bold"
                    position="relative"
                    color="white"
                    ml={"40px"}
                  >
                    {moment(movie.release_date, "YYYY-MM-DD").format("YYYY")}
                  </Text>
                </Flex>

                <Text
                  ml={"100px"}
                  mr={"100px"}
                  position="relative"
                  color="white"
                  key={movie.id}
                >
                  {movie.overview}
                </Text>
                <Text
                  ml={"50px"}
                  mr={"700px"}
                  mt="60px"
                  position="relative"
                  color="white"
                  fontWeight="extrabold"
                >
                  {context.language === "en" ? "GENRES" : "GÉNEROS"}
                </Text>
                <Flex alignItems="center">
                  <UnorderedList
                    ml={"50px"}
                    mr={"700px"}
                    position="relative"
                    color="white"
                    mb={"5%"}
                  >
                    {movie?.genres?.map((g) => (
                      <ListItem key={g.id}>{g.name}</ListItem>
                    ))}
                  </UnorderedList>
                </Flex>
              </Box>
            ) : (
              ""
            )}
          </Flex>
        </Flex>
        <MovieCredits />
      </Box>
    </>
  );
};

export default MovieDetails;
