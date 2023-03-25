import { useContext } from "react";
import { Context } from "../../context/Context";
import { useTranslate } from "../../hooks/useTranslate";
import { footerTranslations } from "../../translations/footerTranslations";
import { FiMoon, FiSun } from "react-icons/fi";
import { Container, IconButton, Stack, Text, Box } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

export const Footer = () => {
  const context = useContext(Context);
  const translations = useTranslate(footerTranslations(context));

  const changeTheme = () => {
    context.clearTheme
      ? context.setClearTheme(false)
      : context.setClearTheme(true);
  };

  return (
    <Box
      // bg={context.clearTheme ? "brand.secondary" : "brand.accent"}
      w={"100%"}
      mt="10%"
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack>
          <IconButton
            mt={5}
            _hover={{ background: "none" }}
            icon={context.clearTheme ? <FiMoon /> : <FiSun />}
            onClick={changeTheme}
            bg={"none"}
            color={context.clearTheme ? "black" : "white"}
          ></IconButton>
        </Stack>
        <Text color={context.clearTheme ? "black" : "white"}>
          &copy; {new Date().getFullYear()} {translations.createdBy}
        </Text>
      </Container>
    </Box>
  );
};
