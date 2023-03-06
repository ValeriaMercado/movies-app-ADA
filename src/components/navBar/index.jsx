import { Box,Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { NavItem } from "../navItem"

export const Navbar = () => {
  return (
    <Box height="60px" width="100%" bg="brand.primary" display="flex" alignItems="center" >
      <Box as="b"  color="white" px={4}>MovieApp</Box>

      <Box>
        <Box> </Box>
      </Box>


      
    </Box>
  )
}

// <Menu>
//         <MenuButton
//             as={Button}
//             rightIcon={<ChevronDownIcon />}
//             borderRadius="10px"
//             bg="tomato"
//             color="white"
//             px={4}
//             h={8}>
//           Actions
//         </MenuButton>
//         <MenuList>
//           <MenuItem>Download</MenuItem>
//           <MenuItem>Create a Copy</MenuItem>
//           <MenuItem>Mark as Draft</MenuItem>
//           <MenuItem>Delete</MenuItem>
//           <MenuItem>Attend a Workshop</MenuItem>
//         </MenuList>
//       </Menu>
