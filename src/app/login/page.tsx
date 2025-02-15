import { Box, Button, Input, Stack } from "@chakra-ui/react";
import { login, signup } from "./action";

export default function LoginPage() {
  return (
    <Box>
        <Stack gap={4}>
            <form method="post">
            <label htmlFor="email">Email:</label>
            <Input id="email" name="email" type="email" required />
            <label htmlFor="password">Password:</label>
            <Input id="password" name="password" type="password" required />
            <Button formAction={login}>Log in</Button>
            <Button formAction={signup}>Sign up</Button>
            </form>
    </Stack>
    </Box>
  )
}