import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
const Links = ["Dashboard", "Projects", "Team"];
import { useTranslate } from "../../hooks/useTranslate";
import { Context } from "../../context/Context";
import { navbarTranslations } from "../../translations/navbarTranslations";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import { AiFillHome } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/Bi";
import { FiTv } from "react-icons/Fi";
import { SearchButton } from "../inputSearch";
//import { SelectLanguage } from "../selectLanguage";
import { useMediaQuery } from "react-responsive";
import { FiMoon, FiSun } from "react-icons/Fi";
import { AlternativeSelectLanguage } from "../alternativeSelect";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const context = useContext(Context);
  const translations = useTranslate(navbarTranslations(context));
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const isMScreen = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  const changeTheme = () => {
    context.clearTheme
      ? context.setClearTheme(false)
      : context.setClearTheme(true);
  };

//   const [isSmallerScreen, setIsSmallerScreen] = useState(false);

// useEffect(() => {
//   const handleResize = () => {
//     setIsSmallerScreen(window.innerWidth <= 768);
//   };
//   window.addEventListener("resize", handleResize);
//   return () => window.removeEventListener("resize", handleResize);
// }, []);


  return (
    <>
      <Box
        bg={context.clearTheme ? "brand.secondary" : "brand.accent"}
        color={context.clearTheme ? "black" : "white"}
        px={4}
      >
        <Flex h={"100px"} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            bg={context.clearTheme ? "brand.secondary" : "brand.accent"}
            color={context.clearTheme ? "black" : "white"}
          />
          <HStack spacing={8} alignItems="center">
            <NavLink to="/">
              <Box ml={isSmallScreen ? "100px " : "10px"}>
                <Image src={context.clearTheme ? logo1 : logo2} w="150px" />
              </Box>
            </NavLink>

            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Menu>
                <NavLink to="/">
                  <MenuButton fontSize="40px">
                    <AiFillHome />
                  </MenuButton>
                </NavLink>
              </Menu>
              <Menu>
                <MenuButton fontSize={"40px"}>
                  <BiCameraMovie />
                </MenuButton>
                <MenuList
                  bg={context.clearTheme ? "brand.secondary" : "brand.accent"}
                  color={context.clearTheme ? "black" : "white"}
                  border={
                    context.clearTheme ? "1px solid black" : "1px solid white"
                  }
                >
                  <MenuItem
                    bg={context.clearTheme ? "brand.secondary" : "brand.accent"}
                    color={context.clearTheme ? "black" : "white"}
                    borderBottom={
                      context.clearTheme ? "1px solid black" : "1px solid white"
                    }
                  >
                    <NavLink to="/upcoming">{translations.upcoming}</NavLink>
                  </MenuItem>
                  <MenuItem
                    bg={context.clearTheme ? "brand.secondary" : "brand.accent"}
                    color={context.clearTheme ? "black" : "white"}
                  >
                    <NavLink to="/top_rated">{translations.topRated}</NavLink>
                  </MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton fontSize={"40px"}>
                  <FiTv />
                </MenuButton>
                <MenuList
                  bg={context.clearTheme ? "brand.secondary" : "brand.accent"}
                  border={
                    context.clearTheme ? "1px solid black" : "1px solid white"
                  }
                >
                  <MenuItem
                    bg={context.clearTheme ? "brand.secondary" : "brand.accent"}
                    color={context.clearTheme ? "black" : "white"}
                    borderBottom={
                      context.clearTheme ? "1px solid black" : "1px solid white"
                    }
                  >
                    <NavLink to="/popular">{translations.popular}</NavLink>
                  </MenuItem>
                  <MenuItem
                    bg={context.clearTheme ? "brand.secondary" : "brand.accent"}
                    color={context.clearTheme ? "black" : "white"}
                  >
                    <NavLink to="/topTv">{translations.top}</NavLink>
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </HStack>

          <Flex ml={isMScreen ? "10px" : "10px"} alignItems={"center"}>
            <Box display={isSmallScreen ? "none" : "flex"}>
              <SearchButton />
            </Box>
          </Flex>
          <Box display={"flex"}>
            <Box display={isSmallScreen ? "none" : "flex"}>
              {/* <SelectLanguage /> */}
              <AlternativeSelectLanguage/>
            </Box>

            <IconButton
              _hover={{ background: "none" }}
              icon={context.clearTheme ? <FiMoon /> : <FiSun />}
              onClick={changeTheme}
              bg={"none"}
              color={context.clearTheme ? "black" : "white"}
            ></IconButton>
          </Box>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Menu>
                <NavLink to="/">
                  <MenuButton
                    as={Button}
                    w="100%"
                    mx="auto"
                    bg={context.clearTheme ? "brand.secondary" : "brand.accent"}
                    color={context.clearTheme ? "black" : "white"}
                    border={
                      context.clearTheme ? "1px solid black" : "1px solid white"
                    }
                    fontSize="25px"
                  >
                    <AiFillHome />
                  </MenuButton>
                </NavLink>
              </Menu>
              <Menu display="flex">
                <MenuButton
                  as={Button}
                  bg={context.clearTheme ? "brand.secondary" : "brand.accent"}
                  color={context.clearTheme ? "black" : "white"}
                  border={
                    context.clearTheme ? "1px solid black" : "1px solid white"
                  }
                  rightIcon={<ChevronDownIcon />}
                  fontSize="25px"
                >
                  <BiCameraMovie />
                </MenuButton>
                <MenuList
                  bg={context.clearTheme ? "brand.secondary" : "brand.accent"}
                  color={context.clearTheme ? "black" : "white"}
                  border={
                    context.clearTheme ? "1px solid black" : "1px solid white"
                  }
                >
                  <MenuItem
                    bg={context.clearTheme ? "brand.secondary" : "brand.accent"}
                    color={context.clearTheme ? "black" : "white"}
                    borderBottom={
                      context.clearTheme ? "1px solid black" : "1px solid white"
                    }
                  >
                    <NavLink to="/upcoming">{translations.upcoming}</NavLink>
                  </MenuItem>
                  <MenuItem
                    bg={context.clearTheme ? "brand.secondary" : "brand.accent"}
                    color={context.clearTheme ? "black" : "white"}
                  >
                    <NavLink to="/top_rated">{translations.topRated}</NavLink>
                  </MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  bg={context.clearTheme ? "brand.secondary" : "brand.accent"}
                  color={context.clearTheme ? "black" : "white"}
                  border={
                    context.clearTheme ? "1px solid black" : "1px solid white"
                  }
                  fontSize="25px"
                >
                  <FiTv />
                </MenuButton>
                <MenuList
                  bg={context.clearTheme ? "brand.secondary" : "brand.accent"}
                  color={context.clearTheme ? "black" : "white"}
                  border={
                    context.clearTheme ? "1px solid black" : "1px solid white"
                  }
                >
                  <MenuItem
                    bg={context.clearTheme ? "brand.secondary" : "brand.accent"}
                    color={context.clearTheme ? "black" : "white"}
                    borderBottom={
                      context.clearTheme ? "1px solid black" : "1px solid white"
                    }
                  >
                    <NavLink to="/popular">{translations.popular}</NavLink>
                  </MenuItem>
                  <MenuItem
                    bg={context.clearTheme ? "brand.secondary" : "brand.accent"}
                    color={context.clearTheme ? "black" : "white"}
                  >
                    <NavLink to="/topTv">{translations.top}</NavLink>
                  </MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <SearchButton />
              </Menu>
              <Menu>
                {/* <SelectLanguage /> */}
                <AlternativeSelectLanguage/>
              </Menu>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

{
  /* <Box
  display="flex"
  mt={isSmallScreen ? "10%" : " "}
  justifyContent={isSmallScreen ? "center" : ""}
>
  <SearchButton />
  <SelectLanguage />
  <IconButton
    _hover={{ background: "none" }}
    icon={context.clearTheme ? <FiMoon /> : <FiSun />}
    onClick={changeTheme}
    bg={"none"}
    color={context.clearTheme ? "black" : "white"}
  ></IconButton>
</Box>; */
}
