import { Box, Center, Flex, Text, } from "@chakra-ui/react"

const CapBox = () => {
    return (
    
    <Box 
    display="flex" 
    justifyContent="center" 
    alignItems="center" 
    minHeight="25vh" 
    borderRadius="90px"
    textAlign="center"
    bg="gray.100">
        <Flex gap={4} justify={"center"} textAlign={"center"}>
        <Center>
            <Text fontSize="2xl"
            as="blockquote"
            borderLeft="4px solid"
            borderColor="blue.400"
            pl={4}
            fontStyle="italic">Kantor Hukum terbaik Se-Tangsel Buka 24jam <br /> Selalu siap siaga untuk warga negara</Text>
        </Center>
        </Flex>
    </Box>
    )
}

export default CapBox;