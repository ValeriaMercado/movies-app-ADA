import { Avatar, Divider, Flex, Heading, IconButton } from '@chakra-ui/react'
import { FiAlignJustify } from "react-icons/fi";
import { useState } from 'react'

export const SideBar = () => {
  const [navSize, setNavSize] = useState('large')
  return (
    <Flex 
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
          _hover={{ background: 'none' }}
          icon={<FiAlignJustify />}
          onClick={() => {
            if (navSize == "small")
            setNavSize("large")
            else
            setNavSize("small")
          }}
        />
      </Flex>
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider/>
        <Flex mt={4} display={navSize == "small" ? "none" : "flex"}>
          <Avatar size="sm" src=""/>
          <Flex lexDir="column" ml={4} display="flex">
              <Heading as="h3" size="sm" >Maca Álvarez</Heading>
          </Flex>
        </Flex>

      </Flex>

    </Flex>
  )
}
