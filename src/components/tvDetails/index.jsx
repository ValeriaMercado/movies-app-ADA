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
import TvCredits from "./tvCredits";
import { useFetchTVDetails } from "../../hooks/useFetchTV";
import { Context } from "../../context/Context";
import { ViewOffIcon } from "@chakra-ui/icons";

const TVDetails = () => {
  const params = useParams();
  const [trailer, setTrailer] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const context = useContext(Context);

  const { tv } = useFetchTVDetails(
    `https://api.themoviedb.org/3/tv/${params.TVDetails}?api_key=ae186e957330197b5106a6c66c8bd1df&language=${context.language}`
  );

  return (
    <Box key={tv.id}>
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
          backgroundImage: `${
            tv.backdrop_path
              ? `url(https://image.tmdb.org/t/p/original/${tv.backdrop_path})`
              : ""
          }`,
          height: "100%",
          backgroundSize: "cover",
        }}
        className="backdrop"
      >
        <Flex>
          <Image
            width="300px"
            ml={"200px"}
            mb="50px"
            pt="200px"
            src={
              tv.poster_path
                ? `http://image.tmdb.org/t/p/w500/${tv.poster_path} `
                : " "
            }
            alt={tv.title}
            key={tv.id}
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
              {trailer ? <Icon mr={"10px"} as={BsPlayCircle} /> : " "}
              {trailer ? "Trailer" : <ViewOffIcon />}
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
                    key={tv.id}
                  >
                    {tv.name}
                  </Text>
                  <Text
                    fontSize={"24px"}
                    fontWeight="extrabold"
                    position="relative"
                    color="white"
                    ml={"20px"}
                    mt="20px"
                  >
                    {moment(tv.first_air_date, "YYYY-MM-DD").format("YYYY")}
                  </Text>
                </Flex>

                <Text
                  ml={"100px"}
                  mr={"100px"}
                  position="relative"
                  color="white"
                  key={tv.id}
                >
                  {tv.overview}
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
                  >
                    {tv?.genres?.map((g) => (
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
        <TvCredits />
      </div>
    </Box>
  );
};

export default TVDetails;
