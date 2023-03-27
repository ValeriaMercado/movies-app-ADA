import { useColorModeValue, Link } from "@chakra-ui/react";

import { Link as ReactLink } from "react-router-dom";

export const NavLink = ({ link, sectionTitle }) => (
  <ReactLink
    to={link}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    {sectionTitle}
  </ReactLink>
);
