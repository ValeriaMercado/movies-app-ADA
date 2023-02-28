import { Flex } from '@chakra-ui/react'

export const SideBar = () => {
  return (
    <Flex 
      pos="sticky"
      left="5"
      h="95vh"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize == "small" ? "15px" : "30px"}
      w="200px"
      flexDir="column"
      justifyContent="space-between"
    >

    </Flex>
  )
}
