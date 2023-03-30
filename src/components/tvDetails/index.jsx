import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import MovieTrailer from "./indexTrailer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
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
import { useFetchDetails } from "../../hooks/useFetchDetails";
import { Context } from "../../context/Context";
import { ViewOffIcon } from "@chakra-ui/icons";
import { useMediaQuery } from "react-responsive";
import { useTranslate } from "../../hooks/useTranslate";
import { generalTranslations } from "../../translations/generalTranslations";

const TVDetails = () => {
  const params = useParams();
  const [trailer, setTrailer] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const context = useContext(Context);
  const translations = useTranslate(generalTranslations(context));

  const isSmallScreen = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const { data } = useFetchDetails(
    `https://api.themoviedb.org/3/tv/${params.TVDetails}?api_key=ae186e957330197b5106a6c66c8bd1df&language=${context.language}`
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
      px={isSmallScreen ? "10px" : " "}
      className={"background"}
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
        <Flex className={trailer ? "background" : ""} mx={"2%"} my="2%">
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
              pos="relative"
            />
          )}
          <Flex direction={"column"}>
            <Button
              color="white"
              size="lg"
              variant={"unstyled"}
              w={{ base: "80%", md: "150px" }}
              mx={{ base: "auto", md: "0" }}
              mt={{ base: "20px", md: "120px" }}
              ml={{ base: " ", md: "500px" }}
              mb={{ md: "10px" }}
              onClick={() => setTrailer(!trailer)}
              display="flex"
              alignItems="center"
            >
              {trailer ? (
                <Box mr={"10px"}>
                  <FontAwesomeIcon icon={faPlay} />
                </Box>
              ) : (
                " "
              )}
              {trailer ? "Trailer" : <ViewOffIcon />}
            </Button>

            {!trailer && (
              <Box
                as="div"
                ml={{ base: "10%", md: "150px" }}
                textAlign={{ base: "center", md: "left" }}
                mb={{ base: "400px" }}
                mr={{ base: "50px" }}
                mt={"50px"}
              >
                <MovieTrailer />
              </Box>
            )}
            {trailer ? (
              <Box as="div" textAlign="center" className=" ">
                <Flex
                  flexDirection={{ base: "column", md: "row" }}
                  ml={{ md: "120px" }}
                  mt={{ md: "10px" }}
                >
                  <Text
                    fontSize={{ base: "35px", md: "35px" }}
                    position="relative"
                    color="white"
                    fontWeight="extrabold"
                    key={data.id}
                  >
                    {data.name}
                  </Text>
                  <Text
                    fontSize={{ base: "20px", md: "24px" }}
                    fontWeight="extrabold"
                    position="relative"
                    color="white"
                    ml={{ base: "0", md: "20px" }}
                    mt={{ base: "10px", md: "10px" }}
                  >
                    {moment(data.first_air_date, "YYYY-MM-DD").format("YYYY")}
                  </Text>
                </Flex>

                <Flex
                  display={"flex"}
                  flexDir={{ base: "column-reverse", md: "row" }}
                >
                  <Flex
                    flexDirection={"column"}
                    w={"100%"}
                    mr={{ base: "0", md: "40px" }}
                    mt={{ base: "30px", md: "0px" }}
                    ml={{ base: "30%", md: "40px" }}
                  >
                    <Text
                      mt={{ base: "10px", md: "20px" }}
                      mb={{ base: "10px", md: "10px" }}
                      ml={{ base: "0", md: "40px" }}
                      position="relative"
                      color="white"
                      fontWeight="extrabold"
                      display={"flex"}
                      justifyContent="flex-start"
                    >
                      {translations.genre}
                    </Text>
                    <Flex justifyContent="flex-start">
                      <UnorderedList
                        display={"flex"}
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        ml={{ base: "0", md: "40px" }}
                        position="relative"
                        color="white"
                      >
                        {data?.genres?.map((g) => (
                          <ListItem key={g.id}>{g.name}</ListItem>
                        ))}
                      </UnorderedList>
                    </Flex>
                  </Flex>

                  <Text
                    mt={{ base: "10px", md: "20px" }}
                    mb={{ base: "10px", md: "20px" }}
                    mr={{ base: "10px", md: "10%" }}
                    position="relative"
                    color="white"
                    key={data.id}
                    display={"flex"}
                    textAlign="start"
                  >
                    {data.overview}
                  </Text>
                </Flex>
              </Box>
            ) : (
              ""
            )}
          </Flex>
        </Flex>
      </Flex>
      <TvCredits />
    </Box>
  );
};

export default TVDetails;
