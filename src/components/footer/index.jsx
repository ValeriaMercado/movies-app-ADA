import { useContext } from "react";
import { Context } from "../../context/Context";
import { useTranslate } from "../../hooks/useTranslate";
import { footerTranslations } from "../../translations/footerTranslations";
import QRCode from "qrcode.react";
import { Container, IconButton, Stack, Text, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  const context = useContext(Context);
  const translations = useTranslate(footerTranslations(context));

  return (
    <Box w={"100%"} mt="10%">
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={"space-between"}
        align={{ base: "center", md: "center" }}
      >
        <Text color={context.clearTheme ? "black" : "white"} textAlign="center">
          &copy; {new Date().getFullYear()} {translations.createdBy}
        </Text>
        <NavLink to="https://linktr.ee/aboutusthemovieapp" target="_blank">
          <QRCode value={"https://linktr.ee/aboutusthemovieapp"} size={80} />
        </NavLink>
      </Container>
    </Box>
  );
};
