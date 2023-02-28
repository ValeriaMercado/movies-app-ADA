import { Avatar, Divider, Flex, Heading } from '@chakra-ui/react'

export const SideBar = () => {
  return (
    <Flex 
      pos="sticky"
      left="5"
      h="95vh"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius= "30px"
      w="200px"
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex>
        <IconButton
          background="none"
          mt={5}
          _hover={{ background: 'none' }}
          icon={<FiMenu />}
          onClick={() => {}}
        />
      </Flex>
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems="flex-start"
        mb={4}
      >
        <Divider/>
        <Flex mt={4} align="center">
          <Avatar size="sm" src=""/>
          <Flex lexDir="column" ml={4} display="flex">
              <Heading as="h3" size="sm" >Maca Álvarez</Heading>
          </Flex>
        </Flex>

      </Flex>

    </Flex>
  )
}
