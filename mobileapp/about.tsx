import dataList from "@/app/data"
import { Box, Center, Grid, Heading, Image, Text } from "@chakra-ui/react"

const AboutMe = () => {
    return (
      <Box gap={6} marginTop={6} >
        <Heading p={4} fontSize={"2vw"}>TENTANG KAMI</Heading>
        {dataList.map((property, index) =>(
          <Grid key={index} templateColumns="repeat(2, 1fr)" gap="6" marginTop={6}>
                      <Box h="20" p={4}>
                          <Heading>{property.imageAlt}</Heading>
                          <Text color={"gray.500"} fontSize={"1vw"} marginTop={4}>{property.title}</Text>
                      </Box>
                      <Center >
                          <Box marginTop={4}>
                              <Image 
                              width={"30vh"} 
                              height='auto'
                              src={property.imageUrl}
                              alt="justice" 
                              borderRadius={"10px"}
                              />
                          </Box>
                      </Center>
                  </Grid>
        ))}
        <Box>
            
        </Box>
      </Box>
    )
}

export default AboutMe;