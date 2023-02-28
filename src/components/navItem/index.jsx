import { Flex, MenuButton,Text, Menu, Icon, Link } from "@chakra-ui/react"

export const NavItem = ({navSize , icon,title,active}) => {
  return (
    <Flex 
        mt={30}
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}>
          <Menu placement="rigth">
            <Link
                backgroundColor={active && "#AEC8CA"}
                p={3}
                borderRadius={8}
                _hover={{ textDecor: 'none', backgroundColor: "#AEC8CA" }}
                w={navSize == "large" && "100%"}
            >
              <MenuButton>
                <Flex>
                  <Icon as={icon}/>
                  <Text>{title}</Text>
                </Flex>
              </MenuButton>
            </Link>
          </Menu>

    </Flex>
  )
}
