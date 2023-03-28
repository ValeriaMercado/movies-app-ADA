import { useContext } from "react";
import { Context } from "../../context/Context";
import { useTranslate } from "../../hooks/useTranslate";
import { footerTranslations } from "../../translations/footerTranslations";
import QRCode from "qrcode.react";
import { Container, IconButton, Stack, Text, Box } from "@chakra-ui/react";

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

      <QRCode value={"https://github.com/MacaAC/movies-app"} size={80} />

      </Container>

    </Box>
  );
};
