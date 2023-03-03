import { Flex, MenuButton,Text, Menu, Icon } from "@chakra-ui/react"
import {Link } from 'react-router-dom'

export const NavItem = ({navSize , icon,title,active,link}) => {
  return (
    <Flex 
        mt={30}
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}>
          <Menu placement="rigth">
            <Link
                backgroundColor={active && "brand.primary" }
                p={3}
                borderRadius={8}
                _hover={{ textDecor: 'none', backgroundColor: "brand.secondary" }}
                w={navSize == "large" && "100%"}
            >
              <MenuButton w='100%'>
                <Flex>
                  <Icon as={icon} fontSize='xl' color={active ? "#553C9A" : "brand.accent"}  />
                  <Link to={link} ><Text ml={5} display={navSize == "small" ? "none" : "flex"}>{title}</Text></Link>
                </Flex>
              </MenuButton>
            </Link>
          </Menu>

    </Flex>
  )
}
