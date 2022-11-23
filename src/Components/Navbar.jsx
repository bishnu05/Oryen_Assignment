import { Box, Button, Flex, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const Navbar = () => {
  return (
    <Box position="fixed" w="100%" bottom="0" >
    <Flex  justifyContent={"space-between"} h="5rem" overflow={"hidden"} alignItems="center">
        
        <Flex alignItems={"center"} gap="2">
          <Image src={"oryen/Oryen_Logo-01.png"} w="7rem" />
          
        </Flex>
        <Flex alignItems={'center'} gap="5">
        <Text>$0.003</Text>
                <Button
                  size={'sm'} colorScheme="teal" alignItems={"center"} gap="2">
                    CONNECT WALLET
                  </Button>
        </Flex>
      
    </Flex>
    </Box>
  )
}
