import { Box, Container } from "@chakra-ui/react";
// import HeadingMobile from "../../../mobileapp/heading";
import MenuHallo from "../../../lib/header";
import HomePage from "../../../lib/hallo";
import CapBox from "../../../lib/caption";
import AboutMe from "../../../mobileapp/about";
import Schedule from "../components/ui/schedule";
import { SupabaseClient } from "@supabase/supabase-js";
import Footer from "../../../lib/footer";

const Mobile = () => {
    console.log(SupabaseClient);
    return (
        <Container height={"auto"}>
            <Box p={4} borderWidth={"1px"}>
                <MenuHallo/>
                <HomePage/>
                <CapBox/>
                <AboutMe/>
                <Schedule/>
                <Footer/>
            </Box>
        </Container>
    )
}

export default Mobile;