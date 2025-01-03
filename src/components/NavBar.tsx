import { HStack, Image, Spacer, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ToggleThemeMode } from "./ToggleThemeMode";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} padding="4px" borderRadius="10px" boxSize="50px" />
      <Text>Navbar</Text>
      <Spacer/>
      <ToggleThemeMode />
    </HStack>
  );
};

export default NavBar;
