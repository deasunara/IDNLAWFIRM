import { Box, Flex, Image, Spacer } from "@chakra-ui/react";

const HeadingMobile = () => {
    return (
        <Box>
            <Flex>
                <Box w='70px'>
                    <Image 
                    width={"100%"}
                    height='auto'
                    maxWidth={"400px"}
                    src='https://res.cloudinary.com/dz7owxpon/image/upload/v1720758729/901d451c-3846-4f1f-8faa-3e8872f4f2ea_jh3t0k.png' 
                    alt='logo idn' />
                </Box>
                <Spacer />
                <Box w='170px' h='10' bg='red.500' />
                <Spacer />
                <Box w='180px' h='10' bg='red.500' />
            </Flex>
        </Box>
    )
}

export default HeadingMobile;