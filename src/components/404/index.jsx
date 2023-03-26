import { Text, Image, Box } from "@chakra-ui/react";
import error404 from "../../assets/error404.gif";

export const NotFound = () => {
  return (
    <Box>
      <Text
        display={"flex"}
        justifyContent="center"
        mt={"200px"}
        fontSize={{ base: "20px", md: "40px" }}
        textAlign={{ base: "center" }}
      >
        Error 404 - PAGE NOT FOUND
      </Text>
      <Image
        src={error404}
        ml={{ md: "500px" }}
        textAlign={{ base: "center" }}
      ></Image>
    </Box>
  );
};
