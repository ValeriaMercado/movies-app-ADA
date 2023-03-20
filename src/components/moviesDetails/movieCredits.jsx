import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Image,
  Box,
  Text,
  Flex,
  UnorderedList,
  ListItem,
  List,
} from "@chakra-ui/react";

const MovieCredits = () => {
  const params = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.movieDetails}/credits?api_key=ae186e957330197b5106a6c66c8bd1df&/`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, [params.movieDetails]);

  return (
    <Box w="100vh overflow-y:visible;overflow-x:hidden">
      <Text
        color={"white"}
        position="relative"
        fontWeight="extrabold"
        mb="10px"
      >
        CAST
      </Text>
      <Flex w="100%" overflowX="scroll" pos={"relative"}>
        <UnorderedList
          position="relative"
          display={"flex"}
          pt={"10px"}
          mb="30px"
        >
          {movie?.cast?.map((c) => (
            <List
              mb={"10px"}
              w="150px"
              mr={"15px"}
              border="1px solid gray"
              borderRadius={"10px"}
            >
              <Image
                src={`http://image.tmdb.org/t/p/original/${c.profile_path}`}
                borderTopRadius="10px"
              ></Image>
              <ListItem
                bg={"white"}
                color="black"
                fontWeight="bold"
                fontSize={"13px"}
              >
                {c.name}
              </ListItem>
              <ListItem
                bg={"white"}
                color="black"
                fontSize={"11px"}
                borderBottomRadius="10px"
                h={"15%"}
              >
                {c.character}
              </ListItem>
            </List>
          ))}
        </UnorderedList>
      </Flex>
    </Box>
  );
};

export default MovieCredits;
