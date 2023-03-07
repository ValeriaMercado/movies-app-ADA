// import { Flex, IconButton, useDisclosure } from "@chakra-ui/react";
// import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
// import { FiHome,FiAward,FiTrendingUp, FiAlignJustify,FiSearch } from "react-icons/fi";

// import { NavIt } from "../navIt";
// //import {Link as ReactLink } from 'react-router-dom'


// export const Navbar = () => {
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <Flex
//       as="nav"
//       align="center"
//       justify="space-between"
//       wrap="wrap"
//       padding={6}
//       bg="teal.500"
//       color="white"
//     >
//       <IconButton
//         display={{ base: "block", md: "none" }}
//         onClick={onToggle}
//         icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//         aria-label="Toggle navigation"
//         variant="ghost"
//       />
//       <Flex align="center" justify="flex-start">
//         <img src="/logo.svg" alt="Logo" height="40px" />
//       </Flex>
//       <Flex
//         display={{ base: isOpen ? "flex" : "none", md: "flex" }}
//         width={{ base: "full", md: "auto" }}
//         alignItems="center"
//         flexGrow={1}
//       >
//         <NavIt link={'/'} title={'Home'} icon={FiHome}/>
//         <NavIt link={'/top_rated'} title={'Top Rated'} icon={FiAward}/>
//         <NavIt link={'/upcoming'} title={'Upcoming'} icon={FiTrendingUp}/>

//       </Flex>
//     </Flex>
//   );
// }
