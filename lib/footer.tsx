import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { FaCopyright } from "react-icons/fa";

export default function Footer() {
    return (
        <Box py={4} textAlign={"center"} bgColor={"#b04446"}>
            <Flex direction={"column"} align={"center"}   color={"white"}>
                <Box textAlign={"center"}>
                    <Image 
                    p={6}
                    width={150}
                    height='auto'
                    src='https://res.cloudinary.com/dz7owxpon/image/upload/v1739516104/WhatsApp_Image_2025-02-11_at_17.22.16_uomjnj.jpg' alt='logo idn'/>
                    <Heading size={"xl"} p={4}>IDN LAW FIRM</Heading>
                </Box>
            </Flex>
            <Flex align="center" color="white" fontSize="md" mt={2} direction={"column"}>
                    <Text display={"flex"} alignItems={"center"} justifyContent={"center"}>Copy Right 2025 <FaCopyright style={{marginRight: "5px", marginLeft: "5px"}}/> all rights reserved</Text>
            </Flex>
        </Box>
    );
}