import { Box, Flex, Text,Image } from '@chakra-ui/react'
import React, { Fragment } from 'react'

export const Home = ({data}) => {
    console.log(data);
  return (
    <Box>
       <Flex justifyContent={"space-between"} border={"1px solid teal"} p="20px" >
           {
            data?.map((el,index)=>(
             <Fragment key={index}>
                {
                    el.img? <>
                    <Box >
                    <Text>{el.name}</Text>
                    <Text>{el?.price}</Text>
                    <Text>{el.title}</Text>
                    </Box>
                    <Image src={el.img} w="6rem"/>
                    </>:<Box>
                        <Text>{el.name}</Text>
                        <Text>{el?.price}</Text>
                    </Box> 
                }
                
             </Fragment>
            ))
           }
        </Flex> 

    </Box>
  )
}
