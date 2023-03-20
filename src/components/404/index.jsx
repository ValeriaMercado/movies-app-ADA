import { Text, Image, Box } from "@chakra-ui/react";
import error404 from "../../assets/error404.gif";

export const NotFound = () => {
  return (
    <Box>
      <Text
        display={"flex"}
        justifyContent="center"
        mt={"200px"}
        fontSize="40px"
      >
        Error 404 - PAGE NOT FOUND
      </Text>
      <Image src={error404} ml="500px"></Image>
    </Box>
  );
};
