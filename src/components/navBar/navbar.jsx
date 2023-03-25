import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Collapse,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Container,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { NavLink } from "../navItem";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../context/Context";
import { SearchButton } from "../inputSearch";
import { navbarTranslations } from "../../translations/navbarTranslations";
import { SelectLanguage } from "../selectLanguage";
import { useTranslate } from "../../hooks/useTranslate";
import LOGO from "../../assets/LOGO.png";

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const context = useContext(Context);

  const translations = useTranslate(navbarTranslations(context));

  return (
    <Container
      as={Stack}
      maxW="100%"
      py={4}
      direction={{ base: "column", md: "row" }}
      justify={{ base: "center", md: "space-between" }}
      align={{ base: "center", md: "center" }}
      bg=" rgba(0,0,0,0.8);"
      color={context.clearTheme ? "black" : "white"}
      pos="fixed"
    >
      <IconButton
        size={"md"}
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        aria-label={"Open Menu"}
        display={{ md: "none" }}
        onClick={onToggle}
      />

      <Box textAlign="center" justifyContent={"center"}>
        <NavLink sectionTitle={translations.home} link={"/"} />
        <Menu>
          <MenuButton
            as={Button}
            mx={"20px"}
            rightIcon={<ChevronDownIcon />}
            variant="unstyled"
            ml={"50px"}
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

      <Box>
        <Text fontFamily={"Passion One, cursive;"} fontSize={"4xl"}>
          THE MOVIE APP
        </Text>
      </Box>
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
