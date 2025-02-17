"use client";

import { Box, Center, Grid, Image, Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react"
// import { DecorativeBox } from "compositions/lib/decorative-box"

const Caption = () => {
  return (
    <Flex gap="4" direction="column">
      <Box height="10">
        <Text fontWeight={"bold"} color={"gray.400"}>IDN LAW FIRM</Text>
      </Box>
      
      <Box >
        <Text fontSize="5vw" fontWeight={"bold"}>
            Melayani 
        </Text>

        <Text fontSize="5vw" fontWeight={"bold"}>
          <Text as="span" color="#b04446">Masyarakat</Text>
        </Text>

        <Text fontSize="5vw" fontWeight={"bold"}>
         Tanpa Henti
        </Text>
      </Box>
 
      <Box height="10">
        <Text color={"gray.500"} fontSize={"1vw"}>
        IDN Law Firm merupakan firma hukum yang didirikan oleh pendiri-pendiri yang memiliki pemahaman hukum mumpuni dan sebagai praktisi hukum yang ahli dalam bidangnya. Dengan tim advokat berpengalaman dan berdedikasi, kami pastikan semua perkara anda di seluruh 
                  Indonesia, baik korporasi maupun individu akan langsung tertangani dan terselesaikan dengan hasil yang maksimal dan sesuai Undang-Undang yang berlaku.
        </Text>
      </Box>
    </Flex>
  )
}


const HomePage = () => {
    return (
    <Box  as="main" p={8} minH="50vw">
        <Grid templateColumns="repeat(2, 1fr)" gap="6">
            <Box h="20">
                <Caption />
            </Box>
            <Center h="20">
                <Box h="20" borderWidth={"1px"}>
                    <Image 
                    width={"30vw"} 
                    height='auto' 
                    src="https://res.cloudinary.com/dz7owxpon/image/upload/v1738675660/tingey-injury-law-firm-NcNqTsq-UVY-unsplash_mwnkz1.jpg" 
                    alt="justice" 
                    />
                </Box>
            </Center>
        </Grid>
    </Box>
  )
}

export default HomePage;