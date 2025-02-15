import { Box } from "@chakra-ui/react";
import Mobile from "./mobile/page";
// import Gambar from "../../lib/image";

const Demo = () => {
  return (
    <Box>
      <Mobile/>
    </Box>
  )
}

export default function Home() {
  return (
    <Box>
      <Demo />
      {/* <Gambar/> */}
    </Box>
  );
}
