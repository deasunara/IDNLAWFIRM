"use client"
import { useColorMode } from "@/app/components/ui/color-mode";
import { Box, Center, Flex, Text, } from "@chakra-ui/react"
import { useEffect } from "react";

const CapBox = () => {
    const {colorMode, setColorMode} = useColorMode();

    useEffect(() => {
        const currentHour = new Date().getHours();
        if (currentHour >= 18 || currentHour < 6) {
          setColorMode("dark");
        } else {
          setColorMode("light");
        }
      }, [setColorMode]);
    return (
    
    <Box 
    display="flex" 
    justifyContent="center" 
    alignItems="center" 
    minHeight="25vh" 
    borderRadius="90px"
    textAlign="center"
    bg={colorMode === "dark" ? "gray.800" : "gray.200"}
    >
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
        <Box>
        </Box>
    </Box>
    )
}

export default CapBox;