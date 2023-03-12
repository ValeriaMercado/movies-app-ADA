import { useEffect, useState } from "react";
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

const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState([]);
  const [trailer, setTrailer] = useState(true);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${params.movieDetails}?api_key=ae186e957330197b5106a6c66c8bd1df&/`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        setLoading(false);
      }, 3000);
  }, [params.movieDetails]);

  return (
    <Box w="100%">
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
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
          height: "100%",
          backgroundSize: "100%",
        }}
        className="backdrop"
      >
        <Flex>
          <Image
            width="300px"
            ml={"200px"}
            mb="50px"
            pt="200px"
            src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.original_title}
          />
          <Flex direction={"column"}>
            <Button
              colorScheme="blackAlpha"
              size="md"
              w={"150px"}
              ml={"500px"}
              mt="200px"
              mb="10px"
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
                  >
                    {movie.original_title}
                  </Text>
                  <Text
                    fontSize={"24px"}
                    fontWeight="extrabold"
                    position="relative"
                    color="white"
                    ml={"20px"}
                    mt="20px"
                  >
                    {moment(movie.release_date, "YYYY-MM-DD").format("YYYY")}
                  </Text>
                </Flex>

                <Text
                  ml={"100px"}
                  mr={"100px"}
                  position="relative"
                  color="white"
                >
                  {movie.overview}
                </Text>
                <Text
                  ml={"50px"}
                  mr={"700px"}
                  mt="60px"
                  position="relative"
                  color="white"
                >
                  GENRES
                </Text>
                <Flex alignItems="center">
                  <UnorderedList
                    ml={"50px"}
                    mr={"700px"}
                    position="relative"
                    color="white"
                  >
                    {movie?.genres?.map((g) => (
                      <ListItem>{g.name}</ListItem>
                    ))}
                  </UnorderedList>
                </Flex>
              </Box>
            ) : (
              ""
            )}
          </Flex>
        </Flex>
      </div>
    </Box>
  );
};

export default MovieDetails;
