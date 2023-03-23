import { useContext } from "react";
import { Context } from "../../context/Context";
import { useTranslate } from "../../hooks/useTranslate";
import { footerTranslations } from "../../translations/footerTranslations";
import { FiMoon, FiSun } from "react-icons/fi";
import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


export const Footer = () => {
  const context = useContext(Context);
  const translations = useTranslate(footerTranslations(context))

  const changeTheme = () => {
    context.clearTheme
      ? context.setClearTheme(false)
      : context.setClearTheme(true);
  };

  return (
    <Container as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
      <Box as="footer" height={18} ml="700px">
        <IconButton
          mt={5}
          _hover={{ background: "none" }}
          icon={context.clearTheme ? <FiMoon /> : <FiSun />}
          onClick={changeTheme}
        ></IconButton>
        {/* 
        <Select
          onChange={handleChange}
          placeholder="Language"
          size="sm"
          w={"20%"}
          bg="brand.primary"
          borderColor="brand.secondary"
          color="brand.accent"
        >
          <option value="option1">Español</option>
          <option value="option2">English</option>
        </Select> */}
      </Box>
      <Stack spacing={{ base: "4", md: "5" }}>
        <Stack justify="space-between" direction="row" align="center">
          <Text>Logo</Text>
          <ButtonGroup>
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Stack>
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} {translations.createdBy}
        </Text>
      </Stack>
    </Container>
  );
};
