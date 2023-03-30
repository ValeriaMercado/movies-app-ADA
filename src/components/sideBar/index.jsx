import {
  Avatar,
  Divider,
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import {
  FiHome,
  FiAward,
  FiTrendingUp,
  FiAlignJustify,
  FiSearch,
} from "react-icons/Fi";
import { useState } from "react";
import { NavItem } from "../navItem";

export const SideBar = () => {
  const [navSize, setNavSize] = useState("large");
  return (
    <Flex
      backgroundColor="brand.primary"
      pos="sticky"
      left="5"
      h="95vh"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize == "small" ? "15px" : "30px"}
      w={navSize == "small" ? "75px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        as="nav"
      >
        <IconButton
          background="none"
          mt={5}
          _hover={{ background: "none" }}
          icon={<FiAlignJustify />}
          onClick={() => {
            if (navSize == "small") setNavSize("large");
            else setNavSize("small");
          }}
        />

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<FiSearch color="brand.secondary" fontSize="xl" />}
          />
          <Input type="text" />
        </InputGroup>

        <NavItem navSize={navSize} title={"Home"} icon={FiHome} />
        <NavItem navSize={navSize} title={"Top Rated"} icon={FiAward} />
        <NavItem navSize={navSize} title={"Upcoming"} icon={FiTrendingUp} />
      </Flex>
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider />
        <Flex mt={4} display={navSize == "small" ? "none" : "flex"}>
          <Avatar size="sm" src="" />
          <Flex flexDir="column" ml={4} display="flex">
            <Heading as="h3" size="sm">
              Maca Álvarez
            </Heading>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
