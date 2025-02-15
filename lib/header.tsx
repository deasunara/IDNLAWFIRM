import { Box, Button, Flex, Image } from "@chakra-ui/react"

import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu"
import { FiAlignJustify } from "react-icons/fi"

const DemoMenu = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="md" bg="#b04446" color={"white"}>
        <FiAlignJustify />
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="new-txt">New Text File</MenuItem>
        <MenuItem value="new-file">New File...</MenuItem>
        <MenuItem value="new-win">New Window</MenuItem>
        <MenuItem value="open-file">Open File...</MenuItem>
        <MenuItem value="export">Export</MenuItem>
      </MenuContent>
    </MenuRoot>
  )
}

const MenuHallo = () => {
    return (
    <Flex p={4} gap="4" justify="space-between" align={"center"} borderBottom="2px solid black" w="full" borderColor={"#b04446"} >
        <Box >
            <Image
            width={180}
            height='auto'
            src='https://res.cloudinary.com/dz7owxpon/image/upload/v1739516104/WhatsApp_Image_2025-02-11_at_17.22.16_uomjnj.jpg' 
            alt='logo idn'
            />
        </Box>
        <Box>
            
        </Box>
        <Box>
            <DemoMenu />
        </Box>
    </Flex>
    )
}

export default MenuHallo;