import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Collapse,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Container,
  Text,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { NavLink } from "../navItem";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../context/Context";
import { SearchButton } from "../inputSearch";
import { navbarTranslations } from "../../translations/navbarTranslations";
import { SelectLanguage } from "../selectLanguage";
import { useTranslate } from "../../hooks/useTranslate";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const context = useContext(Context);
  const translations = useTranslate(navbarTranslations(context));

  const [isSmallerScreen, setIsSmallerScreen] = useState(false);

useEffect(() => {
  const handleResize = () => {
    setIsSmallerScreen(window.innerWidth <= 768);
  };
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


  return (
    <Container
      as={Stack}
      maxW="100%"
      h={"6rem"}
      py={4}
      direction={{ base: "column", md: "row" }}
      justify={{ base: "center", md: "space-between" }}
      align={{ base: "center", md: "center" }}
      bg={context.clearTheme ? "brand.secondary" : "brand.accent"}
      color={context.clearTheme ? "black" : "white"}
    >
      <IconButton
        size={"md"}
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        aria-label={"Open Menu"}
        display={{ base: "inherit", md: "none" }}
        onClick={onToggle}
      />

      <Box textAlign="center" w={"25%"}>
        <NavLink sectionTitle={translations.home} link={"/"} />
        <Menu>
          <MenuButton
            as={Button}
            mx={"20px"}
            rightIcon={<ChevronDownIcon />}
            variant="unstyled"
            ml={"100px"}
          >
            {translations.movies}
          </MenuButton>
          <MenuList>
            <MenuItem color="blackAlpha.900">
              <NavLink
                sectionTitle={translations.upcoming}
                link={"/upcoming"}
              />
            </MenuItem>
            <MenuItem color="blackAlpha.900">
              <NavLink
                sectionTitle={translations.topRated}
                link={"/top_rated"}
              />
            </MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            variant="unstyled"
          >
            {translations.series}
          </MenuButton>
          <MenuList>
            <MenuItem color="blackAlpha.900">
              <NavLink sectionTitle={translations.popular} link={"/popular"} />
            </MenuItem>
            <MenuItem color="blackAlpha.900">
              <NavLink sectionTitle={translations.top} link={"/topTv"} />
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Link to={`/home`}>
        <Box>
          {context.clearTheme ? (
            <Image src={logo1} w="150px" />
          ) : (
            <Image src={logo2} w="150px" />
          )}
        </Box>
      </Link>

      <Box display="flex" pr={"2%"}>
        <SearchButton />
        <SelectLanguage />
      </Box>

      <Collapse in={isOpen} animateOpacity>
        <Box display="flex" justifyContent="center">
          <NavLink sectionTitle={translations.home} link={"/"} />

          <Box>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                {translations.movies}
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <NavLink
                    sectionTitle={translations.upcoming}
                    link={"/upcoming"}
                  />
                </MenuItem>
                <MenuItem>
                  <NavLink
                    sectionTitle={translations.topRated}
                    link={"/top_rated"}
                  />
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                {translations.series}
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <NavLink
                    sectionTitle={translations.popular}
                    link={"/popular"}
                  />
                </MenuItem>
                <MenuItem>
                  <NavLink sectionTitle={translations.top} link={"/topTv"} />
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Collapse>
    </Container>
  );
};
