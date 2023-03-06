import { Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="teal.500"
      color="white"
    >
      <IconButton
        display={{ base: "block", md: "none" }}
        onClick={onToggle}
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        aria-label="Toggle navigation"
        variant="ghost"
      />
      <Flex align="center" justify="flex-start">
        <img src="/logo.svg" alt="Logo" height="40px" />
      </Flex>
      <Flex
        display={{ base: isOpen ? "flex" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </Flex>
    </Flex>
  );
}
