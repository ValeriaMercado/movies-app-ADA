import { useContext, useEffect, useState } from "react";
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
import { Context } from "../../context/Context";

const TvCredits = () => {
  const params = useParams();
  const [tv, setTv] = useState([]);
  const context = useContext(Context);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${params.TVDetails}/credits?api_key=ae186e957330197b5106a6c66c8bd1df&language=${context.language}/`
    )
      .then((res) => res.json())
      .then((data) => {
        setTv(data);
      });
  }, [params.TVDetails]);

  return (
    <Box w="100vh overflow-y:visible;overflow-x:hidden">
      <Text
        color={"white"}
        position="relative"
        fontWeight="extrabold"
        mb="10px"
      >
        {context.language === "en" ? "CAST" : "ELENCO"}
      </Text>
      <Flex w="100%" overflowX="scroll" pos={"relative"}>
        <UnorderedList
          position="relative"
          display={"flex"}
          pt={"10px"}
          mb="30px"
        >
          {tv?.cast?.map((g, index) => (
            <List
              key={index}
              mb={"10px"}
              w="150px"
              mr={"15px"}
              border="1px solid gray"
              borderRadius={"10px"}
            >
              <Image
                src={
                  g.profile_path
                    ? `http://image.tmdb.org/t/p/original/${g.profile_path}`
                    : ""
                }
                borderTopRadius="10px"
              ></Image>
              <ListItem
                bg={"white"}
                color="black"
                fontWeight="bold"
                fontSize={"13px"}
              >
                {g.name}
              </ListItem>
              <ListItem
                bg={"white"}
                color="black"
                fontSize={"11px"}
                borderBottomRadius="10px"
              >
                {g.character}
              </ListItem>
            </List>
          ))}
        </UnorderedList>
      </Flex>
    </Box>
  );
};

export default TvCredits;
