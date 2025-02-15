"use client";

import { Box, Button, Center, Grid, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { MdOutlineCall, MdOutlineEmail, MdOutlineMyLocation } from "react-icons/md";
import { RiArrowRightLine } from "react-icons/ri";

const Schedule = () => {
    const router = useRouter();
    return (
        <Box mb={2}>
            <Heading p={2} fontSize={"2vw"}>KONTAK KAMI</Heading>
            <Grid
            h="auto"
            gap={4}
            >
                <Box  >
                    <Box display={"flex"} alignItems={"center"} gap={2} marginTop={4}>
                        <MdOutlineMyLocation />
                        <Text fontWeight={"bold"}>Address</Text>
                    </Box>
                    <Box marginTop={2}>
                        <Text color={"gray.500"}>
                            Griya Jakarta, Jl. Menteng Raya No.Blok C 1, RW.8, Pamulang Barat, <br /> Kec. Pamulang, Kota Tangerang Selatan, Banten 15416 
                        </Text>
                    </Box>
                    <Box display={"flex"} alignItems={"center"} gap={2} marginTop={4}>
                        <MdOutlineEmail />
                        <Text fontWeight={"bold"}>Email</Text>
                    </Box>
                    <Box marginTop={2} >
                        <Text color={"gray.500"} >deasunara@gmail.com</Text>
                    </Box>
                    <Box display={"flex"} alignItems={"center"} gap={2} marginTop={4}>
                        <MdOutlineCall />
                        <Text fontWeight={"bold"}>Telpon</Text>
                    </Box>
                    <Box marginTop={2} >
                        <Text color={"gray.500"} >+628123456789</Text>
                    </Box>
                    <Box display={"flex"} alignItems={"center"} gap={2} marginTop={4}>
                    <Button bgColor={"#b04446"} color={"white"} variant="outline" onClick={() => router.push("https://docs.google.com/forms/d/e/1FAIpQLSdHDvfxOBya2XSqAc6oI_R0qwaEiizuTVhm44aEn2xkRlxn-w/viewform?usp=header")}>
                        Kunjungi <RiArrowRightLine />
                    </Button>
                    </Box>
                    <Center>
                        <Box display={"flex"} alignItems={"center"} gap={5} marginTop={10}>
                            <MdOutlineEmail size={30}/>
                            <FaFacebook size={30}/>
                            <FaYoutube size={30} />
                            <FaInstagramSquare size={30} />
                        </Box>
                    </Center>
                </Box>
            </Grid>
        </Box>
    )
}

export default Schedule;