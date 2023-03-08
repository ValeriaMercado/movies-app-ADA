// // import { Avatar, Divider, Flex, Heading, IconButton, Input, InputGroup, InputLeftElement} from '@chakra-ui/react'
// // import { FiHome,FiAward,FiTrendingUp, FiAlignJustify,FiSearch } from "react-icons/fi";
// // import { useState } from 'react'
// // //import { NavItem } from '../navItem';


// // export const SideBar = () => {
// //   const [navSize, setNavSize] = useState('large')
// //   return (
// //     <Flex 
// //       bg="brand.primary"
// //       pos="sticky"
// //       left="5"
// //       h="95vh"
// //       marginTop="2.5vh"
// //       boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
// //       borderRadius={navSize == "small" ? "15px" : "30px"}
// //       w={navSize == "small" ? "75px" : "200px"}
// //       flexDir="column"
// //       justifyContent="space-between"
// //     >
// //       <Flex
// //           p="5%"
// //           flexDir="column"
// //           w="100%"
// //           alignItems={navSize == "small" ? "center" : "flex-start"}
// //           as="nav"
// //       >
// //         <IconButton
// //           background="none"
// //           mt={5}
// //           _hover={{ background: 'none' }}
// //           icon={<FiAlignJustify/>}
// //           onClick={() => {
// //             if (navSize == "small")
// //             setNavSize("large")
// //             else
// //             setNavSize("small")
// //           }}
// //         />

// //         <InputGroup>
// //           <InputLeftElement
// //             pointerEvents='none'
// //             children={<FiSearch color="brand.secondary" fontSize='xl' />}
// //           />
// //           <Input type='text' />
// //         </InputGroup>


// //         {/* <NavItem link={'/'} navSize={navSize} title={'Home'} icon={FiHome}/>
// //         <NavItem link={'/top_rated'} navSize={navSize} title={'Top Rated'} icon={FiAward}/>
// //         <NavItem link={'/upcoming'} navSize={navSize} title={'Upcoming'} icon={FiTrendingUp}/> */}

// //       </Flex>
// //       <Flex
// //         p="5%"
// //         flexDir="column"
// //         w="100%"
// //         alignItems={navSize == "small" ? "center" : "flex-start"}
// //         mb={4}
// //       >
// //         <Divider/>
// //         <Flex mt={4} display={navSize == "small" ? "none" : "flex"}>
// //           <Avatar size="sm" src=""/>
// //           <Flex flexDir="column" ml={4} display="flex">
// //               <Heading as="h3" size="sm" >Maca Álvarez</Heading>
// //           </Flex>
// //         </Flex>

// //       </Flex>

// //     </Flex>
// //   )
// // }
// import { useState } from "react";
// import {
//   Box,
//   Flex,
//   IconButton,
//   Stack,
//   Collapse,
//   useColorModeValue,
//   useDisclosure,
//   Heading,
//   Button,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuItemOption,
//   MenuGroup,
//   MenuOptionGroup,
//   MenuDivider,
// } from "@chakra-ui/react";
// import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";

// export const Sidebar = () => {
//   const { isOpen, onToggle } = useDisclosure();
//   const [isMobile, setIsMobile] = useState(false);

//   const toggleMobile = () => {
//     setIsMobile(!isMobile);
//   };

//   return (
//     <Box
//       borderBottom="1px solid"
//       borderBottomColor={useColorModeValue("gray.200", "gray.900")}
//       px={4}
//       position="sticky"
//       top="0"
//       zIndex="3"
//       bg={useColorModeValue("white", "gray.800")}
//     >
//       <Flex
//         h={16}
//         alignItems={"center"}
//         justifyContent={"space-between"}
//         w="100%"
//         maxW="6xl"
//         mx="auto"
//       >
//         <Flex align="center">
//           <Heading size="md">Logo</Heading>
//         </Flex>

//         <IconButton
//           size="lg"
//           icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//           aria-label={"Open Menu"}
//           display={{ md: "none" }}
//           onClick={() => {
//             onToggle();
//             toggleMobile();
//           }}
//         />

//         <Collapse in={isOpen} animateOpacity>
//           <Flex
//             direction="column"
//             pb={4}
//             mt={{ base: 4, md: 0 }}
//             display={{ md: "flex" }}
//             alignItems="center"
//             justifyContent="space-between"
//           >
//             <Stack direction={{ md: "row" }} spacing={{ base: 4, md: 8 }}>
//               <Box>
//                 <Heading size="md">Link 1</Heading>
//               </Box>
//               <Box>
//                 <Heading size="md">Link 2</Heading>
//               </Box>
//               <Box>
//                 <Heading size="md">Link 3</Heading>
//               </Box>
//             </Stack>
//           </Flex>
//         </Collapse>

//         <Flex
//           justifyContent="flex-end"
//           alignItems="center"
//           w="100%"
//           maxW="6xl"
//           display={{ base: "none", md: "flex" }}
//         >
//           <Stack direction={"row"} spacing={6}>
//             <Button>
//               <Heading size="md">Home</Heading>
//             </Button>
//             <Box>
//               <Menu>
//                 <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
//                     Movies
//                 </MenuButton>
//                 <MenuList>
//                   <MenuItem>Upcoming</MenuItem>
//                   <MenuItem>Top Rated</MenuItem>
//                 </MenuList>
//               </Menu>
//             </Box>
//             <Box>
//             <Menu>
//                 <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
//                     Series
//                 </MenuButton>
//                 <MenuList>
//                   <MenuItem>Upcoming</MenuItem>
//                   <MenuItem>Top Rated</MenuItem>
//                 </MenuList>
//               </Menu>              
//             </Box>
//           </Stack>
//         </Flex>
//       </Flex>
//     </Box>
//   );
// }







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

} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { NavLink } from "../navItem";



export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
//     <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
//       {/* <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
//         <IconButton
//           size={"md"}
//           icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//           aria-label={"Open Menu"}
//           display={{ md: "none" }}
//           onClick={onToggle}
//         />
//         <HStack spacing={8} alignItems={"center"}>
//           <Box>LOGO</Box>
//           <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
//             <NavLink sectionTitle="Home" link={'/'}/>
//             <Box>
//                 <Menu>
//                   <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
//                       Movies
//                   </MenuButton>
//                   <MenuList>
//                     <MenuItem><NavLink sectionTitle="Upcoming" link={'/upcoming'}/></MenuItem>
//                     <MenuItem><NavLink sectionTitle="Top Rated" link={'/top_rated'}/></MenuItem>
//                   </MenuList>
//                 </Menu>
//             </Box>
//             <Box>
//               <Menu>
//                   <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
//                       Series
//                   </MenuButton>
//                   <MenuList>
//                     <MenuItem><NavLink sectionTitle="Popular Series" link={'/popular'}/></MenuItem>
//                     <MenuItem><NavLink sectionTitle="Latest Tv Shows" link={'/latest'}/></MenuItem>
//                   </MenuList>
//               </Menu>
//             </Box>
//           </HStack>
//         </HStack>
//       </Flex> */}
// {/* 
//       <Collapse in={isOpen} animateOpacity>
//           <Box pb={4}>
//             <Stack as={"nav"} spacing={4} display="flex" flexDirection="column">

//             </Stack>
//           </Box>
//       </Collapse> */}
//     </Box>
  );
}








