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
import MovieCredits from "./MovieCredits";
import { useFetchDetails } from "../../hooks/useFetchDetails";
import { Context } from "../../context/Context";
import { ViewOffIcon } from "@chakra-ui/icons";
import { useMediaQuery } from "react-responsive";

const MovieDetails = () => {
  const params = useParams();
  const [trailer, setTrailer] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const context = useContext(Context);
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const { data } = useFetchDetails(
    `https://api.themoviedb.org/3/movie/${params.movieDetails}?api_key=ae186e957330197b5106a6c66c8bd1df&language=${context.language}`
  );

  return (
    <Box
      key={data.id}
      bgImage={
        data.backdrop_path
          ? `https://image.tmdb.org/t/p/original/${data.backdrop_path}`
          : " "
      }
      height={{ base: "100%", md: "100%" }}
      backgroundSize={"cover"}
      backgroundPosition="center"
      className="background"
    >
      {isLoading && (
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
        {!isSmallScreen && (
          <Image
            width="300px"
            ml={"200px"}
            mb="50px"
            pt="200px"
            src={
              data.poster_path
                ? `http://image.tmdb.org/t/p/w500/${data.poster_path} `
                : " "
            }
            alt={data.title}
            key={data.id}
          />
        )}
        <Flex direction={"column"}>
          <Button
            colorScheme="blackAlpha"
            size="md"
            w={{ base: "80%", md: "150px" }}
            mx={{ base: "auto", md: "0" }}
            mt={{ base: "20px", md: "150px" }}
            ml={{ base: " ", md: "500px" }}
            mb={{ md: "10px" }}
            onClick={() => setTrailer(!trailer)}
          >
            {trailer ? <Icon mr={"10px"} as={BsPlayCircle} /> : " "}
            {trailer ? "Trailer" : <ViewOffIcon />}
          </Button>
          {!trailer && (
            <Box
              as="div"
              ml={{ base: "10%", md: "100px" }}
              textAlign={{ base: "center", md: "left" }}
              mb={{ base: "400px" }}
              mr={{ base: "50px" }}
            >
              <MovieTrailer />
            </Box>
          )}
          {trailer ? (
            <Box as="div" textAlign="center">
              <Flex
                flexDirection={{ base: "column", md: "row" }}
                ml={{ md: "50px" }}
                mt={{ md: "10px" }}
              >
                <Text
                  fontSize={{ base: "35px", md: "45px" }}
                  position="relative"
                  color="white"
                  fontWeight="extrabold"
                  key={data.id}
                >
                  {data.original_title}
                </Text>
                <Text
                  fontSize={{ base: "20px", md: "24px" }}
                  fontWeight="extrabold"
                  position="relative"
                  color="white"
                  ml={{ base: "0", md: "20px" }}
                  mt={{ base: "10px", md: "20px" }}
                >
                  {moment(data.release_date, "YYYY-MM-DD").format("YYYY")}
                </Text>
              </Flex>

              <Text
                mt={{ base: "10px", md: "20px" }}
                mb={{ base: "10px", md: "20px" }}
                mx={{ md: "30px" }}
                position="relative"
                color="white"
                key={data.id}
                className="text-center"
              >
                {data.overview}
              </Text>
              <Text
                mt={{ base: "10px", md: "20px" }}
                mb={{ base: "10px", md: "20px" }}
                ml={{ base: "0", md: "50px" }}
                mr={{ base: "0", md: "700px" }}
                position="relative"
                color="white"
                fontWeight="extrabold"
              >
                {context.language === "en" ? "GENRES" : ""}
                {context.language === "es" ? "GÉNEROS" : ""}
                {context.language === "fr" ? "GENRES" : ""}
                {context.language === "it" ? "GENERI" : ""}
                {context.language === "ru" ? "ЖАНРЫ" : ""}
              </Text>
              <Flex alignItems="center" justifyContent="center">
                <UnorderedList
                  ml={{ base: "0", md: "50px" }}
                  mr={{ base: "0", md: "700px" }}
                  position="relative"
                  color="white"
                >
                  {data?.genres?.map((g) => (
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
  );
};

export default MovieDetails;
